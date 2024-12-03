'use client'
import { FC, TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string
	isValid?: boolean
}

const Textarea: FC<IProps> = ({
	label,
	isValid = true,
	className,
	...rest
}) => {
	return (
		<label className='flex flex-col gap-3 font-akony text-white text-sm'>
			<span className=''>{label}</span>
			<textarea
				className={twMerge(
					'bg-grey w-full rounded outline-none px-2 py-1 resize-none',
					!isValid && 'border-2 border-orange',
					className
				)}
				{...rest}
			></textarea>
		</label>
	)
}

export default Textarea
