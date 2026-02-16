import { routeData } from '@/src/core/route';
import CaseAPI from '@/src/entities/case/api';
import { mapCaseDTO } from '@/src/entities/case/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';
import ReadingTime from '@/src/share/ui/ReadingTime';
import calcReadingTime from 'reading-time';
import ContentContainer from '@/src/share/ui/ContentContainer';
import { injectHeadingIds, extractToc } from '@/src/share/ui/TOC/utils';
import TOC from '@/src/share/ui/TOC';
import { Views } from '@/src/feature/Views/ui';

export const revalidate = 86400; // 24 часа

interface PageProps {
    params: Promise<{
        slug: string;
        preview: string;
    }>;
    searchParams: Promise<{
        preview: string;
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
const Page = async ({ params, searchParams }: PageProps) => {
    const { slug } = await params;
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let caseData;
    try {
        const res = await CaseAPI.getCasesBySlug(slug, !isEditor);
        caseData = mapCaseDTO(res);
    } catch {
        notFound();
    }

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.cases.title, href: routeData.cases.slug },
        { title: caseData.title },
    ];

    const readingMinutes = calcReadingTime(caseData.content);

    const normalContent = injectHeadingIds(caseData.content);
    const headings = extractToc(normalContent);

    return (
        <>
            <ContentContainer as="main">
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <article className="mb-4 flex flex-col">
                    <h1
                        className="wp-block-heading"
                        dangerouslySetInnerHTML={{ __html: caseData.title }}></h1>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="mb-6 rounded-lg bg-[#7031da70] px-4 py-2 w-fit">
                            <ReadingTime readingMinutes={readingMinutes.minutes} />
                        </div>
                        <div className="mb-6 rounded-lg bg-[#7031da70] px-4 py-2 w-fit">
                            <Views postId={caseData.id} initialViews={caseData.views} />
                        </div>
                    </div>
                    <WPContent>{normalContent}</WPContent>
                </article>
            </ContentContainer>
            {headings.length > 2 && <TOC items={headings} />}
        </>
    );
};

export default Page;
