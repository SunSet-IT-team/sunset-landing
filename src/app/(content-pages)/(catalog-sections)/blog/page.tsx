import { routeData } from '@/src/core/route';
import PostAPI from '@/src/entities/post/api';
import { mapPostDTO } from '@/src/entities/post/api/mapping';
import { Post } from '@/src/entities/post/model/types';
import PostGridContent from '@/src/entities/post/ui/PostGridContent';
import Breadcrumbs from '@/src/feature/Breadcrumbs';
import { PaginationInitializer } from '@/src/share/ui/Pagination/ui/PaginationInitializer';

// export const revalidate = 86400; // 24 часа

/**
 * Страница всех записей (блог)
 */
const Page = async () => {
    const breadcrumbs = [
        { title: routeData.main.title, href: routeData.main.slug },
        { title: routeData.blog.title },
    ];

    let posts: Post[] = [];
    let totalPages: number = 1;
    try {
        const res = await PostAPI.getPosts({ page: 1, per_page: 12 });
        posts = res.data.map((s) => mapPostDTO(s));
        totalPages = res.totalPages;
    } catch {}

    return (
        <>
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
        </>
    );
};

export default Page;
