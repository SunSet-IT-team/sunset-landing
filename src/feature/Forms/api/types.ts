import { FormLeadData, FormLeadResponse } from '../model/types';

export interface FormsApiMethods {
    sendLead: (payload: FormLeadData) => Promise<FormLeadResponse>;
}
