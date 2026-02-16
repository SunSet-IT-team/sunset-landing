import { WordpressPostDTO } from '@/src/share/types/api';

/**
 * DTO Кейса
 */
export interface CaseDTO extends WordpressPostDTO {
    views: number;
}
