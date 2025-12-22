import { mapPostDTO } from '../api/mapping';
import PostAPI from '../api';
import { useContentQuery, UseContentQueryProps } from '@/src/core/api/useContentQuery';
import { Post } from './types';

/**
 * Получение услуг с wordpress api
 */
export const usePostsQuery = (props: Omit<UseContentQueryProps<Post>, 'fetcher' | 'mapper'>) =>
    useContentQuery<Post>({
        ...props,
        fetcher: PostAPI.getPosts,
        mapper: mapPostDTO,
    });
