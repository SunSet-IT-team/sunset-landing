/**
 * Все нужные типы и интерфейсы для работы с API
 */

import { ImageSize } from './share';

/**
 * Параметры для пагинации
 */
export interface APIPaginationParams {
    /**
     * Страница
     */
    page?: number;

    /**
     * Количество записей на страницу
     */
    per_page?: number;

    /**
     * Отступ
     */
    offset?: number;
}

/**
 * Параметры для поиска
 */
export interface APISearchParams {
    /**
     * Фраза для поиска
     */
    search?: string;
}

/**
 * Параметры для встраивания связанных данных
 */
export interface APIEmbedParams {
    /**
     * Включить связанные данные (автор, featured media и т.д.)
     */
    _embed?: boolean | string;
}

/**
 * Все доступные get-параметры
 */
export interface APIGETParams extends APIPaginationParams, APISearchParams, APIEmbedParams {}

/**
 * DTO картиники определённого размера из wordpress
 */
export interface WordPressMediaSizeDTO {
    file: string;
    width: number;
    height: number;
    filesize: number;
    uncropped: boolean;
    mime_type: string;
    source_url: string;
}

/**
 * DTO картирирнки из wordpress
 */
export interface WordPressFeaturedMediaDTO {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    author: number;
    featured_media: number;
    acf: [];
    caption: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        filesize: number;
        sizes: Record<ImageSize, WordPressMediaSizeDTO>;
    };
    source_url: string;
}

