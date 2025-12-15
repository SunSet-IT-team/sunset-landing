import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';

/**
 * Страница какой-то конкретной услуги
 */
const Page = async ({ params }: { params: { slug: string } }) => {
    let service;
    try {
        const res = await ServiceAPI.getServicesBySlug(params.slug);
        service = mapServiceDTO(res);
    } catch {
        notFound();
    }

    const breadcrumbs = [
        { title: 'Главная', href: '/' },
        { title: 'Услуги', href: '/services' },
        { title: service.title },
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <article className="mb-4 flex flex-col">
                <h1
                    className="wp-block-heading"
                    dangerouslySetInnerHTML={{ __html: service.title }}></h1>
                <WPContent>{service.content}</WPContent>
            </article>
        </>
    );
};

export default Page;
