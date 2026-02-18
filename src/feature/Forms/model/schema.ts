import validator from 'validator';
import { z, ZodType } from 'zod';
import { FormLeadData } from './types';

/**
 * Cхема лид-формы
 */
export const formLeadSchema: ZodType<FormLeadData> = z.object({
    name: z.string().trim().optional(),
    phone: z
        .string({
            required_error: 'Телефон обязателен',
        })
        .min(1, 'Телефон обязателен')
        .refine((value) => {
            const rawPhone = value.replace(/\D/g, '');
            return validator.isMobilePhone(rawPhone, 'ru-RU');
        }, 'Введите корректный номер телефона'),
    comment: z.string().trim().optional(),
}) as ZodType<FormLeadData>;
