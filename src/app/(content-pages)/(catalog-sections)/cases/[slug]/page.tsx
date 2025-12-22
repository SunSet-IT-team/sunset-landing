import { routeData } from '@/src/core/route';
import CaseAPI from '@/src/entities/case/api';
import { mapCaseDTO } from '@/src/entities/case/api/mapping';
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
    const data = await CaseAPI.getCasesData(['slug']);

    return data.map((s) => ({ slug: s.slug }));
}

/**
 * Страница какого-то конкретного кейса
 */
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    let caseData;
    try {
        const res = await CaseAPI.getCasesBySlug(slug);
        caseData = mapCaseDTO(res);
    } catch {
        notFound();
    }

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.cases.title, href: routeData.cases.slug },
        { title: caseData.title },
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <article className="mb-4 flex flex-col">
                <h1
                    className="wp-block-heading"
                    dangerouslySetInnerHTML={{ __html: caseData.title }}></h1>
                <WPContent>{caseData.content}</WPContent>
            </article>
        </>
    );
};

export default Page;
