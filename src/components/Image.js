import { TextureLoader } from 'three';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

function Image(props) {
  const texture = useLoader(TextureLoader, props.image);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.needsUpdate = true;
  return (
    <mesh {...props}>
      <planeBufferGeometry
        attach="geometry"
        args={[props.width, props.height]}
      />
      <meshBasicMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
    </mesh>
  );
}
export default Image;
