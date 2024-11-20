'use client'
import { FC, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	isValid?: boolean
}

const Input: FC<IProps> = ({ label, isValid = true, ...rest }) => {
	return (
		<label className='flex flex-col gap-3 font-akony text-white text-sm'>
			<span className=''>{label}</span>
			<input
				className={twMerge(
					'bg-grey w-full rounded outline-none px-2 py-1',
					!isValid && 'border-2 border-orange'
				)}
				{...rest}
			/>
		</label>
	)
}

export default Input
