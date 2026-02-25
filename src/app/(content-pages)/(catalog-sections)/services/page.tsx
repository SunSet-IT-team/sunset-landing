import { routeData } from '@/src/core/route';
import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import { Service } from '@/src/entities/service/model/types';
import ServiceGridContent from '@/src/entities/service/ui/ServiceGridContent';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import SEOAPI from '@/src/feature/SEO/api';
import { mapSEODTO } from '@/src/feature/SEO/api/mapping';
import { generatePageMeta } from '@/src/feature/SEO/model/page';
import BreadcrumbsSchema from '@/src/feature/SEO/ui/BreadcrumbsSchema';
import ContentContainer from '@/src/share/ui/ContentContainer';
import { PaginationInitializer } from '@/src/share/ui/Pagination/ui/PaginationInitializer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 86400; // 24 часа

interface PageProps {
    searchParams: Promise<{
        preview: string;
    }>;
}

/**
 * Генерируем мета-информацию
 */
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let seo;
    try {
        const page = await SEOAPI.getSEOBySlug({
            type: 'pages',
            slug: 'services',
            cache: !isEditor,
        });
        seo = mapSEODTO(page);
    } catch {
        notFound();
    }

    return generatePageMeta(seo);
}

/**
 * Страница всех услуг
 */
const Page = async ({ searchParams }: PageProps) => {
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.services.title },
    ];

    let services: Service[] = [];
    let totalPages: number = 1;
    try {
        const res = await ServiceAPI.getServices({ page: 1, per_page: 12, cache: !isEditor });
        services = res.data.map((s) => mapServiceDTO(s));
        totalPages = res.totalPages;
    } catch {}

    return (
        <>
            <BreadcrumbsSchema items={breadcrumbs} />
            <ContentContainer as="main">
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <PaginationInitializer itemsPerPage={12}>
                    <ServiceGridContent
                        className="w-full"
                        initialData={services}
                        initialTotalPages={totalPages}
                        initialPage={1}
                        title={routeData.services.title}
                        postSlug={routeData.services.slug}
                    />
                </PaginationInitializer>
            </ContentContainer>
        </>
    );
};

export default Page;
