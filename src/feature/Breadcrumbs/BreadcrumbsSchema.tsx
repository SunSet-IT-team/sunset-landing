import { Breadcrumb } from './types';

interface Props {
    items: Breadcrumb[];
}

/**
 * Микроразметка для хлебных крошек
 */
const BreadcrumbsSchema = ({ items }: Props) => {
    const schema = {
        '@context': 'https://schema.org',

        '@type': 'BreadcrumbList',

        itemListElement: items
            .map((item, index) => ({
                '@type': 'ListItem',

                position: index + 1,

                name: item.title.replace(/<[^>]+>/g, ''),

                item: item.href ? `${process.env.NEXT_PUBLIC_SITE_URL}${item.href}` : undefined,
            }))
            .filter((i) => i.item),
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

export default BreadcrumbsSchema;
