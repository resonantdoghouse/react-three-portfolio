import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
const GROUND_HEIGHT = -100; // A Constant to store the ground height of the game.

function Terrain() {
  const terrain = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (terrain.current.position.z += 0.4));

  return (
    <mesh
      visible
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        roughness={1}
        metalness={0}
        wireframe={true}
      />
    </mesh>
  );
}

export default Terrain;
