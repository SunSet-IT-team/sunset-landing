'use client'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={twMerge(
				'font-akony text-white text-xl transition-colors p-2',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
