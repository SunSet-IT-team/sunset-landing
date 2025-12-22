/**
 * Тип для отображения контента
 */
export type ContentMode = 'grid' | 'list';

/**
 * Размеры картинок
 */
export type ImageSize =
    | 'woocommerce_thumbnail'
    | 'woocommerce_gallery_thumbnail'
    | 'woocommerce_single'
    | 'medium'
    | 'thumbnail'
    | 'medium_large'
    | 'full';

/**
 * Тип стандартной записи
 */
export type PostContent = {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    url: string;
    slug: string;
};
