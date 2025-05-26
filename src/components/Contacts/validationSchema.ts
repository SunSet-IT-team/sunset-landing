import validator from 'validator';
import { z, ZodType } from 'zod';
import { IContactData } from './contactData.type';

export const contactSchema: ZodType<IContactData> = z.object({
    name: z
        .string({
            required_error: 'Имя обязательно',
        })
        .min(1, 'Имя обязательно'),
    email: z
        .string({
            required_error: 'Email обязателен',
        })
        .min(1, 'Email обязателен')
        .email('Введите корректный email'),
    phone: z
        .string({
            required_error: 'Телефон обязателен',
        })
        .min(1, 'Телефон обязателен')
        .refine((value) => validator.isMobilePhone(value), {
            message: 'Введите корректный номер телефона',
        }),
    message: z.string().optional(),
}) as ZodType<IContactData>;
