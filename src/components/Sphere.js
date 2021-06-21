import React from 'react';
import * as THREE from 'three';

import earthImg from '../assets/images/8081_earthmap2k.jpeg';
import earthBumpImg from '../assets/images/8081_earthbump2k.jpeg';

import { useLoader } from '@react-three/fiber';

function Sphere() {
  const [texture, bump] = useLoader(THREE.TextureLoader, [
    earthImg,
    earthBumpImg,
  ]);

  return (
    <mesh visible position={[0, 0, 0]}>
      <sphereGeometry
        attach="geometry"
        args={[2, 32, 32]}
        rotation={[2, 2, 1]}
      />
      <meshStandardMaterial
        attach="material"
        color="white"
        roughness={0.1}
        metalness={0.1}
        transparent
        map={texture}
        bumpMap={bump}
      />
    </mesh>
  );
}

export default Sphere;
