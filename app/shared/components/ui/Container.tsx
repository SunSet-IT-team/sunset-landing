import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<PropsWithChildren<IProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<div className={twMerge('max-w-[1440px] mx-auto', className)} {...rest}>
			{children}
		</div>
	)
}

export default Container
