import { routeData } from '@/src/core/route';
import CaseAPI from '@/src/entities/case/api';
import { mapCaseDTO } from '@/src/entities/case/api/mapping';
import { Case } from '@/src/entities/case/model/types';
import CaseGridContent from '@/src/entities/case/ui/CaseGridContent';
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
 * Страница всех кейсов
 */
const Page = async ({ searchParams }: PageProps) => {
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.cases.title },
    ];

    let cases: Case[] = [];
    let totalPages: number = 1;
    try {
        const res = await CaseAPI.getCases({ page: 1, per_page: 12, cache: !isEditor });
        cases = res.data.map((s) => mapCaseDTO(s));
        totalPages = res.totalPages;
    } catch {}

    return (
        <ContentContainer as="main">
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <PaginationInitializer itemsPerPage={12}>
                <CaseGridContent
                    className="w-full"
                    initialData={cases}
                    initialTotalPages={totalPages}
                    initialPage={1}
                    title={routeData.cases.title}
                    postSlug={routeData.cases.slug}
                />
            </PaginationInitializer>
        </ContentContainer>
    );
};

export default Page;
