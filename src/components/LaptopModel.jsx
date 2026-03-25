import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function LaptopModel(props) {
  const { scene } = useGLTF('/lenovo.glb');
  const group = useRef();
  
  // Smooth breathing and gentle auto-rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/lenovo.glb');
