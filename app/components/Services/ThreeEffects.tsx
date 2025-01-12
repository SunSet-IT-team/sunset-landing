import { extend, Object3DNode, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

extend({
	RenderPass,
	EffectComposer,
	ShaderPass,
})

declare global {
	namespace JSX {
		interface IntrinsicElements {
			shaderPass: Object3DNode<ShaderPass, typeof ShaderPass>
		}
	}
}

// Простая настройка для яркости
const BrightnessShader = {
	uniforms: {
		tDiffuse: { value: null },
		brightness: { value: 1.0 }, // значение яркости
	},
	vertexShader: `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
  `,
	fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float brightness;
      varying vec2 vUv;
      void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          gl_FragColor = vec4(color.rgb * brightness, color.a);
      }
  `,
}

export const ThreeEffects = () => {
	const { camera, gl, scene } = useThree()
	const composer = useRef<EffectComposer>()

	useEffect(() => {
		composer.current = new EffectComposer(gl)
		composer.current.addPass(new RenderPass(scene, camera))

		// Используем ShaderPass для яркости
		const brightnessPass = new ShaderPass(BrightnessShader)
		brightnessPass.uniforms.brightness.value = 1.5 // Задаем яркость
		composer.current.addPass(brightnessPass)

		// Resize the composer when the window size changes
		composer.current.setSize(window.innerWidth, window.innerHeight)
	}, [gl, scene, camera])

	useFrame(() => {
		composer.current?.render()
	}, 1)

	return null
}
