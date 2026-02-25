export interface FormLeadData {
    name?: string;
    email?: string;
    phone: string;
    comment?: string;
}

export interface FormLeadRequest extends FormLeadData {
    pageUrl: string;
    recaptchaToken: string;
    action: string;
}

export interface FormLeadResponse {
    ok?: boolean;
    message?: string;
}
