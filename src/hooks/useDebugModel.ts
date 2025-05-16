import GUI from 'lil-gui'
import { useEffect } from 'react'
//@ts-ignore
export const useDebugModel = ref => {
	useEffect(() => {
		const gui = new GUI()
		gui.add(ref.current.rotation, 'x', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.rotation, 'y', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.rotation, 'z', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.position, 'x', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.position, 'y', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.position, 'z', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.scale, 'x', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.scale, 'y', -Math.PI * 2, Math.PI * 2)
		gui.add(ref.current.scale, 'z', -Math.PI * 2, Math.PI * 2)
		return () => {
			gui.destroy()
		}
	}, [])
}
