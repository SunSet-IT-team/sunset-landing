export interface FormLeadData {
    name?: string;
    phone: string;
    comment?: string;
}

export interface FormLeadRequest extends FormLeadData {
    pageUrl: string;
    recaptchaToken: string;
}

export interface FormLeadResponse {
    ok?: boolean;
    message?: string;
}
