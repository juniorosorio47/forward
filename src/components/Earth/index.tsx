import dynamic from 'next/dynamic';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';




const Earth: React.FC = (props) => {

    // const  [ nightMap ] = useLoader(TextureLoader, [EarthNightMap])

    return <>
        <ambientLight intensity={0.5} />
        <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshPhongMaterial color="red" />
        </mesh>

    </>
};

export default Earth;