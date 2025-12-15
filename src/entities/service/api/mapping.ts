import { ServiceDTO } from './dto';
import { Service } from './types';

/**
 * Переводим ServiceDTO в нормальный Service
 */
export function mapServiceDTO(dto: ServiceDTO): Service {
    return {
        title: dto.title.rendered,
        content: dto.content.rendered,
        excerpt: dto.excerpt.rendered,
        url: dto.link,
        id: dto.id,
        slug: dto.slug,
    };
}
