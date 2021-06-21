import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';

import Terrain from './components/Terrain';
import Text from './components/Text';
import Box from './components/Box';

import About from './components/About';
import Sphere from './components/Sphere';
import SkyBox from './components/SkyBox';
import Image from './components/Image';
import Orbit from './components/Orbit';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import './App.css';

import moonSurfaceImg from './assets/images/moon_surface.png';
import starsImg from './assets/images/stars.png';
import earthImg from './assets/images/earth.png';
import sunflowerImg from './assets/images/sunflower.png';
import forestImage4 from './assets/images/04_Forest.png';

function App() {
  return (
    <div className="App">
      <CameraButtons />
      <About />
      <Canvas
        gl={{
          powerPreference: 'high-performance',
          antialias: true,
          stencil: false,
          depth: false,
        }}
        shadowMap
        // style={{ background: 'black' }}
        camera={{ fov: 75, position: [0, 0, 0] }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} />

        <Orbit />
        <CameraControls />
        <SkyBox />

        {/* <Text text={`Hello World`} position={[-4, 3, -3]} /> */}

        {/* <Box position={[3, 0, 0]} /> */}

        <Suspense fallback={null}>
          {/* forestImage4 */}
          <Sphere />

          <Center>
            {/* <Image
              position={[1, 0, -1]}
              image={moonSurfaceImg}
              width={9}
              height={5}
            /> */}
            {/* <Image
              position={[0, 0, -1]}
              image={starsImg}
              width={20}
              height={10}
            /> */}
          </Center>
        </Suspense>
        <Terrain />
      </Canvas>
    </div>
  );
}

export default App;
