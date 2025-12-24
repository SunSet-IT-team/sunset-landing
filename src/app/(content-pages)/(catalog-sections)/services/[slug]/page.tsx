import { routeData } from '@/src/core/route';
import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import ContentContainer from '@/src/share/ui/ContentContainer';
import TOC from '@/src/share/ui/TOC';
import { extractToc, injectHeadingIds } from '@/src/share/ui/TOC/utils';
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
    const data = await ServiceAPI.getServicesData(['slug']);

    return data.map((s) => ({ slug: s.slug }));
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

    const normalContent = injectHeadingIds(service.content);
    const headings = extractToc(normalContent);

    return (
        <>
            <ContentContainer>
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <article className="mb-4 flex flex-col">
                    <h1
                        className="wp-block-heading"
                        dangerouslySetInnerHTML={{ __html: service.title }}></h1>
                    <WPContent>{normalContent}</WPContent>
                </article>
            </ContentContainer>
            {headings.length > 2 && <TOC items={headings} />}
        </>
    );
};

export default Page;
