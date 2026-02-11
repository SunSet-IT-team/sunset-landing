import { routeData } from '@/src/core/route';
import ServiceAPI from '@/src/entities/service/api';
import { mapServiceDTO } from '@/src/entities/service/api/mapping';
import { Service } from '@/src/entities/service/model/types';
import ServiceGridContent from '@/src/entities/service/ui/ServiceGridContent';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import ContentContainer from '@/src/share/ui/ContentContainer';
import { PaginationInitializer } from '@/src/share/ui/Pagination/ui/PaginationInitializer';

export const revalidate = 86400; // 24 часа

interface PageProps {
    searchParams: Promise<{
        preview: string;
    }>;
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
    );
};

export default Page;
