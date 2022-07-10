import { Canvas } from '@react-three/fiber'
import { PCFSoftShadowMap } from 'three'

import CameraControls from './CameraControls'
import Truck from './Truck'

export default function TruckContainer() {
    return (
        <Canvas
            style={{
                margin: '0 auto',
                width: '800px',
                height: '800px',
            }}
            shadows={{
                type: PCFSoftShadowMap,
            }}
        >
            <CameraControls />
            <ambientLight color={0xebcb8b} intensity={0.3} />
            <directionalLight
                color={0xffffcc}
                position={[4, 5, 4]}
                castShadow
            />
            <Truck />
        </Canvas>
    )
}
