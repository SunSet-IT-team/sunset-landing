import { routeData } from '@/src/core/route';
import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import BreadcrumbsSchema from '@/src/feature/Breadcrumbs/BreadcrumbsSchema';
import ContentContainer from '@/src/share/ui/ContentContainer';
import FAQ from '@/src/share/ui/FAQ';
import FAQSchema from '@/src/share/ui/FAQ/FAQSchema';
import TOC from '@/src/share/ui/TOC';
import { extractToc, injectHeadingIds } from '@/src/share/ui/TOC/utils';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';

export const revalidate = 86400; // 24 часа

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        preview: string;
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
const Page = async ({ params, searchParams }: PageProps) => {
    const { slug } = await params;
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let service;
    try {
        const res = await ServiceAPI.getServicesBySlug(slug, !isEditor);
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
            <BreadcrumbsSchema items={breadcrumbs} />
            {service.faqs.length > 0 && <FAQSchema items={service.faqs} />}
            <ContentContainer>
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <article className="mb-4 flex flex-col">
                    <h1
                        className="wp-block-heading"
                        dangerouslySetInnerHTML={{ __html: service.title }}></h1>
                    <WPContent>{normalContent}</WPContent>
                </article>
                {service.faqs.length > 0 && <FAQ items={service.faqs} />}
            </ContentContainer>
            {headings.length > 2 && <TOC items={headings} />}
        </>
    );
};

export default Page;
