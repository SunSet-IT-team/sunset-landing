'use client'
import { FC } from 'react'

const FormSuccess: FC = () => {
	return (
		<div className='relative text-center text-3xl mx-auto pt-40'>
			<h2>
				Ваша заявка
				<br />
				<span className='text-orange'>принята</span>
			</h2>
			<p className='font-arodora-pro'>
				Вы обратились по адресу! <br />
				Скоро по вашим контактам свяжутся
			</p>
		</div>
	)
}

export default FormSuccess
