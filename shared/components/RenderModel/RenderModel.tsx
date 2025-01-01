import { Canvas, CanvasProps } from '@react-three/fiber'
import { FC, PropsWithChildren, Suspense } from 'react'
interface IProps extends CanvasProps {}

const RenderModel: FC<PropsWithChildren<IProps>> = ({ children, ...rest }) => {
	return (
		<Canvas {...rest}>
			<Suspense fallback={null}>{children}</Suspense>
		</Canvas>
	)
}

export default RenderModel
