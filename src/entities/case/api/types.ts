import { APIFielsParams, APIGETParams } from '@/src/share/types/api';
import { CaseDTO } from './dto';

/**
 * Методы для CaseAPI
 */
export interface CaseAPIMethods {
    /**
     * Получить кейсы
     */
    getCases: (params: APIGETParams) => Promise<{
        data: CaseDTO[];
        totalPages: number;
    }>;

    /**
     * Получить кейс по slug
     */
    getCasesBySlug: (slug: string) => Promise<CaseDTO>;

    /**
     * Получить дату всех записей
     */
    getCasesData: (fields: APIFielsParams[]) => Promise<Partial<CaseDTO>[]>;
}
