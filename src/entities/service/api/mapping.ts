import { ServiceDTO } from './dto';
import { Service } from './types';

/**
 * Переводим ServiceDTO в нормальный Service
 */
export function mapServicesDTO(dto: ServiceDTO[]): Service[] {
    return dto.map((service) => ({
        title: service.title.rendered,
        content: service.content.rendered,
        excerpt: service.excerpt.rendered,
        url: service.link,
        id: service.id,
    }));
}
