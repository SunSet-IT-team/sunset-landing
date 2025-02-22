import validator from 'validator'
import { z, ZodType } from 'zod'
import { IContactData } from './contactData.type'

export const contactSchema: ZodType<IContactData> = z.object({
	name: z
		.string({
			required_error: 'Имя обязательно',
		})
		.min(1, 'Имя обязательно')
		.regex(/^[а-яА-Яa-zA-Z]+$/, 'Имя должно содержать только буквы'),
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
		.refine(validator.isMobilePhone, {
			message: 'Введите корректный номер телефона',
		}),
	message: z.string().optional(),
})
