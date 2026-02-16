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
 * Вложения в виде картинки
 */
export type PostImage = {
    url: string;
    width: number;
    height: number;
};

/**
 * Превью
 */
export type Thumbnail = PostImage;

/**
 * Сео
 */
export type SeoMetaData = {
    modified_time: string;
    published_time: string;
    description: string;
    og_description: string;
    og_locale: string;
    og_title: string;
    og_type: string;
    og_url: string;
    title: string;
};

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
    thumbnail?: Thumbnail;
    seo?: SeoMetaData;
};
