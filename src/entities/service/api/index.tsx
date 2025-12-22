import { buildUrl } from '@/src/share/utils/api';
import { ServiceAPIMethods } from './types';

/**
 * API по работе с услугами
 */
const ServiceAPI: ServiceAPIMethods = {
    getServices: async ({
        search,
        page,
        per_page,
    }: {
        search?: string;
        page?: number;
        per_page?: number;
    }) => {
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            search,
            page,
            per_page,
            _embed: true,
        });
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) {
            const error = new Error(data.message || 'Ошибка при запросе услуг') as any;
            error.wpCode = data.code;
            throw error;
        }

        const totalPages = Number(res.headers.get('X-WP-TotalPages')) || 1;

        return {
            data,
            totalPages,
        };
    },

    /**
     * Получить услугу по slug
     */
    getServicesBySlug: async (slug: string) => {
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            slug,
            _embed: true,
        });
        const res = await fetch(url, {
            next: { revalidate: 60 * 60 * 24 },
        });
        const data = await res.json();

        if (!res.ok) {
            const error = new Error(data.message || 'Ошибка при запросе услуг') as any;
            error.wpCode = data.code;
            throw error;
        }

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Услуга не найдена');
        }

        return data[0];
    },

    /**
     * Получить slug всех услуг
     */
    getServicesSlug: async () => {
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            per_page: 100,
            _fields: 'slug',
        });
        const res = await fetch(url, {
            next: { revalidate: 60 * 60 * 24 },
        });
        const slugs = await res.json();

        if (!res.ok) {
            const error = new Error(slugs.message || 'Ошибка при запросе услуг') as any;
            error.wpCode = slugs.code;
            throw error;
        }

        return slugs;
    },
};

export default ServiceAPI;
