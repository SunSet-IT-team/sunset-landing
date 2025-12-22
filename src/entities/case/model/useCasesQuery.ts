import { mapCaseDTO } from '../api/mapping';
import CaseAPI from '../api';
import { useContentQuery, UseContentQueryProps } from '@/src/core/api/useContentQuery';
import { Case } from './types';

/**
 * Получение кейсов с wordpress api
 */
export const useCasesQuery = (props: Omit<UseContentQueryProps<Case>, 'fetcher' | 'mapper'>) =>
    useContentQuery<Case>({
        ...props,
        fetcher: CaseAPI.getCases,
        mapper: mapCaseDTO,
    });
