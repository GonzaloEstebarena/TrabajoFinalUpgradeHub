/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Nefertiti(props) {
  const { nodes, materials } = useGLTF('../../../../3d/nefertiti.glb')

  const nefer = useRef("<Mesh>(null)");

let step= .2;
let speed= .02;

useFrame(() => {
  if(!nefer.current){
    return;
  }
  // step += speed;
  nefer.current.rotation.y += .002;
})

  return (
    <group ref={nefer} {...props} dispose={null}>
      <mesh geometry={nodes['default'].geometry}
       material={materials.Physical1} 
       rotation={[-3.12, 0, 0]}
       scale={3}
      //  position={[100,0,-400]}
        />
        <pointLight
          position={[]}
          args={['white',1,30]}/>

    </group>
  )
}

useGLTF.preload('../../../../3d/nefertiti.glb')

export default Nefertiti