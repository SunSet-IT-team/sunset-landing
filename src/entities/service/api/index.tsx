import { buildUrl } from '@/src/share/utils/api';
import { ServiceAPIMethods } from './types';

/**
 * API по работе с услугами
 */
const ServiceAPI: ServiceAPIMethods = {
    getServices: async (params) => {
        const url = buildUrl('/api/services', params as Record<string, string | number | boolean>);
        const res = await fetch(url);
        console.log(res.json);
    },
};

export default ServiceAPI;
