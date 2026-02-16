import { WordpressPostDTO } from '@/src/share/types/api';

/**
 * DTO записи
 */
export interface PostDTO extends WordpressPostDTO {
    views: number;
}
