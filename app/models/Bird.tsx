import { useGLTF } from '@react-three/drei'
import React from 'react'

const Bird = () => {
    const { scene, animations } = useGLTF("/assets/3d/bird.glb");
    
  return (
      <mesh position={[-5, 1, 1]} scale={[0.003, 0.003, 0.003]}>
          <primitive object={scene} />
    </mesh>
  )
}

export default Bird
