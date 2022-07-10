import { useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { AnimationMixer } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Truck() {
    let mixer: AnimationMixer
    const truck = useLoader(FBXLoader, `${require('assets/models/truck.fbx')}`)
    const { animations } = truck

    // eslint-disable-next-line prefer-const
    mixer = new AnimationMixer(truck)
    void mixer.clipAction(animations[0]).play()

    useFrame((_, delta) => {
        mixer.update(delta)
    })

    useEffect(() => {
        truck.traverse((c) => {
            c.castShadow = true
            c.receiveShadow = true
        })
    }, [])

    return (
        <Suspense fallback={null}>
            <primitive
                receiveShadow
                position={[0, 0.2, 0]}
                object={truck}
                scale={0.005}
                dispose={null}
                castShadow
            />
        </Suspense>
    )
}
