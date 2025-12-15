import { APIGETParams } from '@/src/share/types/api';
import { ServiceDTO } from './dto';

/**
 * Методы для ServiceAPI
 */
export interface ServiceAPIMethods {
    getServices: (params: APIGETParams) => Promise<{
        data: ServiceDTO[];
        totalPages: number;
    }>;
}

/**
 * Объект услуги
 */
export type Service = {
    title: string;
    excerpt: string;
    content: string;
    url: string;
    id: number;
};

/**
 * Ошибка в ответе Api Wordpress сервера
 */
export interface WPError extends Error {
    wpCode?: 'rest_post_invalid_page_number';
}
