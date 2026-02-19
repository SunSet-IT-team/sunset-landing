type Grecaptcha = {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
    }
}

let recaptchaScriptPromise: Promise<void> | null = null;

const loadRecaptchaScript = (siteKey: string) => {
    if (typeof window === 'undefined') {
        return Promise.reject(new Error('reCAPTCHA доступна только в браузере'));
    }

    if (window.grecaptcha) {
        return Promise.resolve();
    }

    if (recaptchaScriptPromise) {
        return recaptchaScriptPromise;
    }

    recaptchaScriptPromise = new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Не удалось загрузить reCAPTCHA'));
        document.head.appendChild(script);
    });

    return recaptchaScriptPromise;
};

export const getRecaptchaToken = async (action: string) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        throw new Error('Не задан NEXT_PUBLIC_RECAPTCHA_SITE_KEY');
    }

    await loadRecaptchaScript(siteKey);

    if (!window.grecaptcha) {
        throw new Error('reCAPTCHA не инициализирована');
    }

    return new Promise<string>((resolve, reject) => {
        window.grecaptcha?.ready(async () => {
            try {
                const token = await window.grecaptcha?.execute(siteKey, { action });

                if (!token) {
                    reject(new Error('Не удалось получить reCAPTCHA токен'));
                    return;
                }

                resolve(token);
            } catch (error) {
                reject(error);
            }
        });
    });
};
