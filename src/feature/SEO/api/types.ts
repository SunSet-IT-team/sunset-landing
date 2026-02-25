import { WordpressPostDTO } from '@/src/share/types/api';

export interface SeoAPIParams {
    /**
     * Тип контента в WordPress (post, page, services и т.д.)
     */
    type: string;
    /**
     * Слаг страницы/записи
     */
    slug: string;
    /**
     * Кеширование
     */
    cache?: boolean;
}

/**
 * Методы для для SEO запросов
 */
export interface SEOAPIMethods {
    /**
     * Получить seo-данные по slug
     */
    getSEOBySlug: (params: SeoAPIParams) => Promise<WordpressPostDTO>;
}
