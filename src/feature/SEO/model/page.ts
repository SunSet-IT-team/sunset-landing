import { PostContent } from '@/src/share/types/share';

/**
 * Генерирует мета-информацию для страницы
 */
export const generatePageMeta = (post: PostContent) => {
    return {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt || '',

        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}/`,
        },

        openGraph: {
            title: post.seo?.title || post.title,
            description: post.seo?.description || post.excerpt || '',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.slug}/`,
            siteName: 'SunSet IT Agency',
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
