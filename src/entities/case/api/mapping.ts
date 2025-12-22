import { Case } from '../model/types';
import { CaseDTO } from './dto';

/**
 * Переводим CaseDTO в нормальный Case
 */
export function mapCaseDTO(dto: CaseDTO): Case {
    return {
        title: dto.title.rendered,
        content: dto.content.rendered,
        excerpt: dto.excerpt.rendered,
        url: dto.link,
        id: dto.id,
        slug: dto.slug,
    };
}
