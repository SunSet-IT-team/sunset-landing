import { Post } from '../model/types';
import { PostDTO } from './dto';

/**
 * Переводим PostDTO в нормальный Post
 */
export function mapPostDTO(dto: PostDTO): Post {
    return {
        title: dto.title.rendered,
        content: dto.content.rendered,
        excerpt: dto.excerpt.rendered,
        url: dto.link,
        id: dto.id,
        slug: dto.slug,
    };
}
