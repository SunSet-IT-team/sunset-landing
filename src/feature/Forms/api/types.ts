import { FormLeadRequest, FormLeadResponse } from '../model/types';

export interface FormsApiMethods {
    sendLead: (payload: FormLeadRequest) => Promise<FormLeadResponse>;
}
