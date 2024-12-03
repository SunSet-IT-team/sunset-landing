'use client'
import Button from '@/shared/components/ui/Button'
import Field from '@/shared/components/ui/Field'
import Textarea from '@/shared/components/ui/Textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { IContactData } from './contactData.type'
import { contactSchema } from './validationSchema'

const ContactForm: FC = () => {
	const {
		handleSubmit,
		formState: { errors },
		reset,
		register,
		control,
	} = useForm<IContactData>({
		defaultValues: {
			name: '',
			phone: '',
			message: '',
			email: '',
		},
		resolver: zodResolver(contactSchema),
		mode: 'onTouched',
	})
	const onSubmit = (data: IContactData) => {
		console.log(data)
		// reset()
	}
	return (
		<form
			className='flex flex-col gap-10 w-3/4 mt-10'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Controller
				name='message'
				control={control}
				render={({ field }) => (
					<Textarea {...field} label='Готовы обсудить проект?' rows={5} />
				)}
			/>

			<Controller
				name='name'
				control={control}
				render={({ field }) => (
					<Field
						{...field}
						label='Как вас зовут?'
						className=' px-3 py-2'
						isValid={!errors.name?.message}
						error={errors.name?.message}
					/>
				)}
			/>
			<Controller
				name='phone'
				control={control}
				render={({ field }) => (
					<Field
						{...field}
						label='Ваш телефон'
						className=' px-3 py-2'
						isValid={!errors.phone?.message}
						error={errors.phone?.message}
					/>
				)}
			/>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<Field
						{...field}
						label='Ваша почта'
						className=' px-3 py-2'
						isValid={!errors.email?.message}
						error={errors.email?.message}
					/>
				)}
			/>
			<Button className='text-orange' type='submit'>
				Отправить
			</Button>
		</form>
	)
}

export default ContactForm
