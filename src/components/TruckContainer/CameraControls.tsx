import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function CameraControls() {
    const { camera, gl } = useThree()
    const controlsRef = useRef<OrbitControls>(null!)

    useFrame(() => {
        if (controlsRef.current) controlsRef.current.update()
    })

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement)
        controlsRef.current = controls
        controls.autoRotate = true
        controls.enableDamping = true
        controls.target.set(0, 1, 0)
        controls.minDistance = 2
        controls.maxDistance = 15
        controls.maxPolarAngle = Math.PI / 2

        return () => {
            controls.dispose()
        }
    }, [camera, gl])

    return null
}
