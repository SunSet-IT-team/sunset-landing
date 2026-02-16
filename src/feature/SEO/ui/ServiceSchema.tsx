import { Service } from '@/src/entities/service/model/types';

/**
 * Схема для услуги
 */
interface Props {
    service: Service;
}

/**
 * Schema.org разметка для страницы услуги
 */
const ServiceSchema = ({ service }: Props) => {
    const schema = {
        '@context': 'https://schema.org',

        '@type': 'Service',

        name: service.title,

        description: service.excerpt,

        provider: {
            '@type': 'Organization',

            name: 'Sunset IT Agency',

            url: 'https://sunset-it.agency',
        },

        areaServed: {
            '@type': 'Place',

            name: 'Worldwide',
        },
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

export default ServiceSchema;
