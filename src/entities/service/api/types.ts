import { APIGETParams } from '@/src/share/types/api';
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
     * Получить все slugs
     */
    getServicesSlug: () => Promise<{ slug: string }[]>;
}
