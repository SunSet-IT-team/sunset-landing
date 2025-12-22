import { mapServiceDTO } from '../api/mapping';
import ServiceAPI from '../api';
import { useContentQuery, UseContentQueryProps } from '@/src/core/api/useContentQuery';
import { Service } from './types';

/**
 * Получение услуг с wordpress api
 */
export const useServicesQuery = (
    props: Omit<UseContentQueryProps<Service>, 'fetcher' | 'mapper'>,
) =>
    useContentQuery<Service>({
        ...props,
        fetcher: ServiceAPI.getServices,
        mapper: mapServiceDTO,
    });
