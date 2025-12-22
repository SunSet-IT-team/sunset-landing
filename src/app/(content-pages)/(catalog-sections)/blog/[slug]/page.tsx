import { routeData } from '@/src/core/route';
import PostAPI from '@/src/entities/post/api';
import { mapPostDTO } from '@/src/entities/post/api/mapping';
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
    const slugs = await PostAPI.getPostsSlug();

    return slugs;
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

    return (
        <>
            <Breadcrumbs items={breadcrumbs} className="mb-4" />
            <article className="mb-4 flex flex-col">
                <h1
                    className="wp-block-heading"
                    dangerouslySetInnerHTML={{ __html: post.title }}></h1>
                <WPContent>{post.content}</WPContent>
            </article>
        </>
    );
};

export default Page;
