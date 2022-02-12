import React, { Suspense, useCallback, useRef } from 'react';

import { Container } from './styles';
import { OrbitControls, Stars, useScroll } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import StarsBackground from './Stars';

interface IBackgroundProps {
  // position: number;
};

const Background: React.FC<IBackgroundProps> = () => {

  return (<Container >
    <Canvas >
        <Suspense fallback={null} >
          <StarsBackground/>
        </Suspense>
      </Canvas>
  </Container>)
}

export default Background;