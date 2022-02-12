import Head from "next/head";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { Container } from './styles';
import Earth from "../../components/Earth";



const Galaxy: React.FC = () => {

    return <>
        <Head>
            <title>Galaxy</title>
        </Head>
        <Container>
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </Container>
    </>
};

export default Galaxy;