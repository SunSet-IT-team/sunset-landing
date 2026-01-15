import { APIFielsParams, APIGETParams } from '@/src/share/types/api';
import { PostDTO } from './dto';

/**
 * Методы для PostAPI
 */
export interface PostAPIMethods {
    /**
     * Получить записи
     */
    getPosts: (params: APIGETParams) => Promise<{
        data: PostDTO[];
        totalPages: number;
    }>;

    /**
     * Получить запись по slug
     */
    getPostsBySlug: (slug: string, cache?: boolean) => Promise<PostDTO>;

    /**
     * Получить дату всех записей
     */
    getPostsData: (fields: APIFielsParams[], cache?: boolean) => Promise<Partial<PostDTO>[]>;
}
