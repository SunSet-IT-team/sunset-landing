import { buildUrl } from '@/src/share/utils/api';
import { FormsApiMethods } from './types';

const FormsAPI: FormsApiMethods = {
    sendLead: async (payload) => {
        const apiHost = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = '/wp-json/sunset/v1/lead';

        if (!apiHost) {
            throw new Error('Не задан NEXT_PUBLIC_API_URL');
        }

        const url = buildUrl(`${apiHost}${endpoint}`);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
            const error = new Error(data.message || 'Ошибка при отправке формы') as any;
            error.wpCode = data.code;
            throw error;
        }

        return data;
    },
};

export default FormsAPI;
