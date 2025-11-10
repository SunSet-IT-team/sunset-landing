import { APIGETParams } from '@/src/share/types/api';

/**
 * Методы для ServiceAPI
 */
export interface ServiceAPIMethods {
    getServices: (params: APIGETParams) => void;
}
