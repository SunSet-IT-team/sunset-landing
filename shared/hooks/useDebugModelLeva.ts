import { useControls } from 'leva'
import { useMemo } from 'react'

export const useDebugModelLeva = (id: number) => {
	const options = useMemo(() => {
		return {
			rotationx: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
			rotationy: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
			rotationz: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
			positionx: { value: 0, min: -10, max: 10, step: 0.01 },
			positiony: { value: 0, min: -10, max: 10, step: 0.01 },
			positionz: { value: 0, min: -10, max: 10, step: 0.01 },
			scalex: { value: 1, min: 0, max: 10, step: 0.01 },
			scaley: { value: 1, min: 0, max: 10, step: 0.01 },
			scalez: { value: 1, min: 0, max: 10, step: 0.01 },
		}
	}, [])

	const controls = useControls(`Model ${id}`, options)

	return controls
}

// export const useDebugModelLeva = (id: number) => {
// 	// const options = useMemo(() => {
// 	return {
// 		rotationx: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
// 		rotationy: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
// 		rotationz: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
// 		positionx: { value: 0, min: -10, max: 10, step: 0.01 },
// 		positiony: { value: 0, min: -10, max: 10, step: 0.01 },
// 		positionz: { value: 0, min: -10, max: 10, step: 0.01 },
// 		scalex: { value: 1, min: 0, max: 10, step: 0.01 },
// 	}
// 	// }, [])

// 	// const controls = useControls(`Model ${id}`, options)

// 	// return controls
// }
