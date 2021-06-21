import { CubeTextureLoader } from 'three';
import { useThree } from '@react-three/fiber';

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();

  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    '/right.png',
    '/left.png',
    '/top.png',
    '/bottom.png',
    '/front.png',
    '/back.png',
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;

  return null;
}

export default SkyBox;
