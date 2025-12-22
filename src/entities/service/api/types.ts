import { APIFielsParams, APIGETParams } from '@/src/share/types/api';
import { ServiceDTO } from './dto';

/**
 * Методы для ServiceAPI
 */
export interface ServiceAPIMethods {
    /**
     * Получить услуги
     */
    getServices: (params: APIGETParams) => Promise<{
        data: ServiceDTO[];
        totalPages: number;
    }>;

    /**
     * Получить услугу по slug
     */
    getServicesBySlug: (slug: string) => Promise<ServiceDTO>;

    /**
     * Получить дату всех услуг
     */
    getServicesData: (fields: APIFielsParams[]) => Promise<Partial<ServiceDTO>[]>;
}
