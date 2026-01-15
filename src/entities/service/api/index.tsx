import { buildUrl } from '@/src/share/utils/api';
import { ServiceAPIMethods } from './types';

/**
 * API по работе с услугами
 */
const ServiceAPI: ServiceAPIMethods = {
    getServices: async (params: {
        search?: string;
        page?: number;
        per_page?: number;
        cache?: boolean;
    }) => {
        const { search, page, per_page, cache = true } = params;
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            search,
            page,
            per_page,
            _embed: true,
        });
        const res = await fetch(url, {
            cache: cache ? 'force-cache' : 'no-store',
            next: cache ? { revalidate: 60 * 60 * 24 } : undefined,
        });
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

    getServicesBySlug: async (slug: string, cache: boolean = true) => {
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            slug,
            _embed: true,
        });
        const res = await fetch(url, {
            cache: cache ? 'force-cache' : 'no-store',
            next: cache ? { revalidate: 60 * 60 * 24 } : undefined,
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

    getServicesData: async (fields, cache: boolean = true) => {
        const url = buildUrl('https://server.sunset-it.agency/wp-json/wp/v2/services', {
            per_page: 100,
            _fields: fields.join(','),
        });
        const res = await fetch(url, {
            cache: cache ? 'force-cache' : 'no-store',
            next: cache ? { revalidate: 60 * 60 * 24 } : undefined,
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
