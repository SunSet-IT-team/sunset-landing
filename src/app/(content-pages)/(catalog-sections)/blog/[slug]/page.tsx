import { routeData } from '@/src/core/route';
import PostAPI from '@/src/entities/post/api';
import { mapPostDTO } from '@/src/entities/post/api/mapping';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import ReadingTime from '@/src/share/ui/ReadingTime';
import calcReadingTime from 'reading-time';
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
    const data = await PostAPI.getPostsData(['slug']);

    return data.map((s) => ({ slug: s.slug }));
}

/**
 * Страница какой-то конкретной записи
 */
const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    let post;
    try {
        const res = await PostAPI.getPostsBySlug(slug);
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

    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <article className="mb-4 flex flex-col">
                <h1
                    className="wp-block-heading"
                    dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                <div className="mb-6 rounded-lg bg-[#7031da70] px-4 py-2 w-fit">
                    <ReadingTime readingMinutes={readingMinutes.minutes} />
                </div>
                <WPContent>{post.content}</WPContent>
            </article>
        </>
    );
};

export default Page;
