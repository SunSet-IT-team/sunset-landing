import { APIGETParams } from '@/src/share/types/api';
import { ServiceDTO } from './dto';

/**
 * Методы для ServiceAPI
 */
export interface ServiceAPIMethods {
    /**
     * Получить услуги
     */
    getServices: (params: APIGETParams) => Promise<{
        data: ServiceDTO[];
        totalPages: number;
    }>;

    /**
     * Получить услугу по slug
     */
    getServicesBySlug: (slug: string) => Promise<ServiceDTO>;
}

/**
 * Объект услуги
 */
export type Service = {
    title: string;
    excerpt: string;
    content: string;
    url: string;
    slug: string;
    id: number;
};

/**
 * Ошибка в ответе Api Wordpress сервера
 */
export interface WPError extends Error {
    wpCode?: 'rest_post_invalid_page_number';
}
