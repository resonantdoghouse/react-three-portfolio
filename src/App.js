import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';

import Terrain from './components/Terrain';
import Text from './components/Text';
// import Box from './components/Box';

import About from './components/About';
import Sphere from './components/Sphere';
import SkyBox from './components/SkyBox';
import Orbit from './components/Orbit';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import './App.css';

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
        camera={{ fov: 75, position: [0, 0, 0] }}
        style={{ background: 'black' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Orbit />
        <CameraControls />
        <SkyBox />

        <Suspense
          fallback={
            <Center>
              <Text text={`loading`} />
            </Center>
          }
        >
          <Sphere />
        </Suspense>
        <Terrain />
      </Canvas>
    </div>
  );
}

export default App;
