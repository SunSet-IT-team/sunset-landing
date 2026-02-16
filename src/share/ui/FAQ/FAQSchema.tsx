import { FAQItem } from '.';

interface Props {
    items: FAQItem[];
}

/**
 * Схема для FAQs
 */
const FAQSchema = ({ items }: Props) => {
    const schema = {
        '@context': 'https://schema.org',

        '@type': 'FAQPage',

        mainEntity: items.map((item) => ({
            '@type': 'Question',

            name: item.question,

            acceptedAnswer: {
                '@type': 'Answer',

                text: item.answer,
            },
        })),
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

export default FAQSchema;
