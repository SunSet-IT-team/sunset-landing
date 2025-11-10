/**
 * Сборка ссылки с гет-параметрами
 */
export const buildUrl = (
    base: string,
    params?: Record<string, string | number | boolean | undefined>,
) => {
    const url = new URL(
        base,
        typeof window !== 'undefined' ? window.location.origin : 'http://localhost',
    );
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) url.searchParams.append(key, String(value));
        });
    }
    return url.toString();
};
