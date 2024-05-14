import { useGLTF } from '@react-three/drei'
import React from 'react'

interface Props {
  isRotating: boolean;
  planeScale: number[];
  planePosition: number[];
  rotation: number[];
}

const Plane = ({isRotating, planeScale, planePosition, rotation}: Props) => {
    const {scene, animations} = useGLTF("/assets/3d/plane.glb")
  return (
      <mesh isRotating={isRotating} scale={planeScale} position={planePosition} rotation={rotation}>
          <primitive object={scene} />
    </mesh>
  )
}

export default Plane
