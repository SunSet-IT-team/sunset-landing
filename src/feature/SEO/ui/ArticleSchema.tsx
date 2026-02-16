import { Service } from '@/src/entities/service/model/types';
import { PostContent } from '@/src/share/types/share';

/**
 * Схема для статьи
 */
interface Props {
    post: PostContent;
}

/**
 * Schema.org разметка для страницы статьи
 */
const ArticleSchema = ({ post }: Props) => {
    const schema = {
        '@context': 'https://schema.org',

        '@type': 'Article',

        headline: post.title,

        datePublished: post.seo ? post.seo.published_time : '',
        dateModified: post.seo ? post.seo.modified_time : '',

        author: {
            '@type': 'Organization',

            name: 'Sunset IT Agency',

            url: 'https://sunset-it.agency',
        },

        inLanguage: 'ru-RU',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
};

export default ArticleSchema;
