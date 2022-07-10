export default function Ground(props: JSX.IntrinsicElements['mesh']) {
    return (
        <mesh {...props} rotation={[Math.PI / -2, 0, 0]} position={[0, 0, 0]}>
            <planeBufferGeometry args={[1000, 1000]} />
            <meshStandardMaterial color={0xfaf2e7} />
        </mesh>
    )
}
