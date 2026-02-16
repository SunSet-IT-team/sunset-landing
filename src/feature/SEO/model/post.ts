import { PostContent } from '@/src/share/types/share';

/**
 * Генерирует мета-информацию для записей
 */
export const generatePostMeta = (post: PostContent) => {
    return {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt || '',

        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${post.slug}/`,
        },

        openGraph: {
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.excerpt || '',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${post.slug}/`,
            siteName: 'Sunset IT Agency',
            type: 'website',
            images: post.thumbnail
                ? [
                      {
                          url: post.thumbnail.url,
                          width: post.thumbnail.width,
                          height: post.thumbnail.height,
                      },
                  ]
                : undefined,
            locale: 'ru_RU',
        },

        twitter: {
            card: 'summary_large_image',
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.excerpt || '',
            images: post.thumbnail?.url ? [post.thumbnail.url] : undefined,
        },

        robots: {
            index: true,
            follow: true,
        },
    };
};
