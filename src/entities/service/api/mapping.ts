import { Service } from '../model/types';
import { ServiceDTO } from './dto';

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
        faqs: dto.faqs ?? [],
    };
}
