import validator from 'validator'
import { z, ZodType } from 'zod'
import { IContactData } from './contactData.type'

export const contactSchema: ZodType<IContactData> = z.object({
	name: z
		.string({
			required_error: 'Имя обязательно',
		})
		.regex(/^[а-яA-Z]+$/, 'Имя должно содержать только буквы'),
	email: z
		.string({
			required_error: 'Email обязательно',
		})
		.email('Введите корректный email'),
	phone: z
		.string({
			required_error: 'Телефон обязательно',
		})
		.refine(validator.isMobilePhone, {
			message: 'Введите корректный номер телефона',
		}),
	message: z.string().optional(),
})
