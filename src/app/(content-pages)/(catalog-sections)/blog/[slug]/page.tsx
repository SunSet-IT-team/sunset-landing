import { routeData } from '@/src/core/route';
import PostAPI from '@/src/entities/post/api';
import { mapPostDTO } from '@/src/entities/post/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import ReadingTime from '@/src/share/ui/ReadingTime';
import calcReadingTime from 'reading-time';
import { WPContent } from '@/src/share/ui/WPContent';
import { notFound } from 'next/navigation';
import ContentContainer from '@/src/share/ui/ContentContainer';
import TOC from '@/src/share/ui/TOC';
import { injectHeadingIds, extractToc } from '@/src/share/ui/TOC/utils';
import FAQ from '@/src/share/ui/FAQ';
import { Views } from '@/src/feature/Views/ui';
import BreadcrumbsSchema from '@/src/feature/SEO/ui/BreadcrumbsSchema';
import ThumbnailCard from '@/src/share/ui/ThumbnailCard';
import { generatePostMeta } from '@/src/feature/SEO/model/post';
import { Metadata } from 'next';
import FAQSchema from '@/src/feature/SEO/ui/FAQSchema';
import ArticleSchema from '@/src/feature/SEO/ui/ArticleSchema';
import { FormCTA } from '@/src/feature/Forms/ui';

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
    const data = await PostAPI.getPostsData(['slug']);

    return data.map((s) => ({ slug: s.slug }));
}

/**
 * Генерируем мета-информацию
 */
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let post;
    try {
        const res = await PostAPI.getPostsBySlug(slug, !isEditor);
        post = mapPostDTO(res);
    } catch {
        notFound();
    }

    return generatePostMeta(post, 'blog');
}

/**
 * Страница какой-то конкретной записи
 */
const Page = async ({ params, searchParams }: PageProps) => {
    const { slug } = await params;
    const { preview } = await searchParams;

    const isEditor = preview && preview === '1';

    let post;
    try {
        const res = await PostAPI.getPostsBySlug(slug, !isEditor);
        post = mapPostDTO(res);
    } catch {
        notFound();
    }

    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.blog.title, href: routeData.blog.slug },
        { title: post.title },
    ];

    const readingMinutes = calcReadingTime(post.content);

    const normalContent = injectHeadingIds(post.content);
    const headings = extractToc(normalContent);

    return (
        <>
            <ArticleSchema post={post} />
            <BreadcrumbsSchema items={breadcrumbs} />
            {post.faqs.length > 0 && <FAQSchema items={post.faqs} />}
            <ContentContainer as="main">
                <Breadcrumbs items={breadcrumbs} className="mb-4" />
                <article className="mb-4 flex flex-col">
                    <h1
                        className="wp-block-heading"
                        dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="mb-6 rounded-lg bg-[#7031da70] px-4 py-2 w-fit">
                            <ReadingTime readingMinutes={readingMinutes.minutes} />
                        </div>
                        <div className="mb-6 rounded-lg bg-[#7031da70] px-4 py-2 w-fit">
                            <Views postId={post.id} initialViews={post.views} />
                        </div>
                    </div>
                    {post.thumbnail && (
                        <ThumbnailCard
                            src={post.thumbnail.url}
                            className="w-full aspect-video mb-6"
                        />
                    )}
                    <WPContent>{normalContent}</WPContent>
                </article>
                <FormCTA />
                {post.faqs.length > 0 && <FAQ items={post.faqs} />}
            </ContentContainer>
            {headings.length > 2 && <TOC items={headings} />}
        </>
    );
};

export default Page;
