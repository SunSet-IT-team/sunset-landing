'use client'
import { FC, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	isValid?: boolean
}

const Field: FC<IProps> = ({
	label,
	error = '',
	isValid = true,
	className,
	...rest
}) => {
	return (
		<label className='flex flex-col gap-3 font-akony text-white text-sm'>
			<span className=''>{label}</span>
			<input
				className={twMerge(
					'bg-grey w-full rounded outline-none px-2 py-1',
					!isValid && 'border-2 border-orange',
					className
				)}
				{...rest}
			/>
			{!isValid && (
				<span className='text-red-500'>{error || 'Заполните поле верно'}</span>
			)}
		</label>
	)
}

export default Field
