import { PostContent } from '@/src/share/types/share';

/**
 * Объект услуги
 */
export type Case = PostContent & {
    views: number;
};
