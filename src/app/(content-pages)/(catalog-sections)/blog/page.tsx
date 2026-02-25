import { routeData } from '@/src/core/route';
import PostAPI from '@/src/entities/post/api';
import { mapPostDTO } from '@/src/entities/post/api/mapping';
import { Post } from '@/src/entities/post/model/types';
import PostGridContent from '@/src/entities/post/ui/PostGridContent';
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
            slug: 'blog',
            cache: !isEditor,
        });
        seo = mapSEODTO(page);
    } catch {
        notFound();
    }

    return generatePageMeta(seo);
}

/**
 * Страница всех записей (блог)
 */
const Page = async ({ searchParams }: PageProps) => {
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.blog.title },
    ];

    let posts: Post[] = [];
    let totalPages: number = 1;
    try {
        const res = await PostAPI.getPosts({ page: 1, per_page: 12, cache: !isEditor });
        posts = res.data.map((s) => mapPostDTO(s));
        totalPages = res.totalPages;
    } catch {}

    return (
        <>
            <BreadcrumbsSchema items={breadcrumbs} />
            <ContentContainer as="main">
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <PaginationInitializer itemsPerPage={12}>
                    <PostGridContent
                        className="w-full"
                        initialData={posts}
                        initialTotalPages={totalPages}
                        initialPage={1}
                        title={routeData.blog.title}
                        postSlug={routeData.blog.slug}
                    />
                </PaginationInitializer>
            </ContentContainer>
        </>
    );
};

export default Page;
