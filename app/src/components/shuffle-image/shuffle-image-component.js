import React from 'react';
import styled from 'styled-components';
import { randCoordinates } from '../../common/functions';
import { Image  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './shuffle-image-component.css';

const ShuffleImageComponent = () => {

    const CANV_APOTHEM = 2;
    const imgFolder = require.context('../../eidolon-fw22/', false);
    const images = imgFolder.keys().map(imgFolder)

    // const img_node = imgFolder(`./${img}.webp`);
    // console.log(img_node);

    // <img src={img_node}/>;

    return (
        <ShuffleImageContainer>
            <Canvas camera={{ position: [0, 0, 1], fov: 90 }} style={{height: "100vh"}}>
                <group>
                    {images.map(
                        (image, index) =>
                            <mesh key={index}>
                                <Image position={[...randCoordinates(CANV_APOTHEM), 0]} url={image}/>
                            </mesh>
                    )
                    }
                </group>
            </Canvas>
        </ShuffleImageContainer>
    );
};

export const ShuffleImageContainer = styled.div`
    border: 1px solid green;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: black; 
`;


export default ShuffleImageComponent;