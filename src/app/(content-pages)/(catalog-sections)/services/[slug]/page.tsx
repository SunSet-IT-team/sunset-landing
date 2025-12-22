import { routeData } from '@/src/core/route';
import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * Определяем все slug необходимые для кеша
 */
export async function generateStaticParams() {
    const slugs = await ServiceAPI.getServicesSlug();

    return slugs;
}

/**
 * Страница какой-то конкретной услуги
 */
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    let service;
    try {
        const res = await ServiceAPI.getServicesBySlug(slug);
        service = mapServiceDTO(res);
    } catch {
        notFound();
    }

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.services.title, href: routeData.services.slug },
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
