import { buildUrl } from '@/src/share/utils/api';
import { SEOAPIMethods, SeoAPIParams } from './types';
import { WordpressPostDTO } from '@/src/share/types/api';

/**
 * API по работе с сео-данными
 */
const SEOAPI: SEOAPIMethods = {
    getSEOBySlug: async ({ type, slug, cache = true }: SeoAPIParams) => {
        const url = buildUrl(`https://server.sunset-it.agency/wp-json/wp/v2/${type}`, {
            slug,
            _embed: true, // все медиа
        });

        const res = await fetch(url, {
            cache: cache ? 'force-cache' : 'no-store',
            next: cache ? { revalidate: 60 * 60 * 24 } : undefined,
        });

        const data = await res.json();

        if (!res.ok) {
            const error = new Error(data.message || 'Ошибка при запросе SEO данных') as any;
            error.wpCode = data.code;
            throw error;
        }

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error(`Запись типа "${type}" со slug "${slug}" не найдена`);
        }

        return data[0] as WordpressPostDTO;
    },
};

export default SEOAPI;
