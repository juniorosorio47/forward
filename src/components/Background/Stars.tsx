import { OrbitControls, Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useCallback, useMemo, useRef } from 'react';

// import { Container } from './styles';

import { CameraShake } from '@react-three/drei'



interface ShakeController {
  getIntensity: () => number
  setIntensity: (val: number) => void
}

const StarsBackground: React.FC = () => {
    const starsRef = useRef();

    const deg2rad = useCallback((degrees:number) => degrees * (Math.PI / 180), []);

    useThree(({camera}) => {
        camera.rotation.set(deg2rad(30), 0, 0);
    });

    const config = {
        maxRoll: 200, 
        rollFrequency: 0.05, // Frequency of the roll rotation
        intensity: 0.05, // initial intensity of the shake
        decay: false, // should the intensity decay over time
        additive: false, // this should be used when your scene has orbit controls
    }

    return (<>

    
        <ambientLight intensity={0.08}/>
        <mesh ref={starsRef}>
            <Stars
                radius={200}    
                depth={60}  
                count={10000}
                factor={7}
                saturation={1}
                fade={true}
            />
            <CameraShake {...config} />
        </mesh>
    </>);
}

export default StarsBackground;