import React from 'react';
import styled from 'styled-components';
import { device } from '../../common/device-sizes';
import { randCoordinates } from '../../common/functions';
import { Image  } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './shuffle-image-component.css';

const ShuffleImageComponent = () => {



    const CANV_APOTHEM = 1;
    const imgFolder = require.context('../../eidolon-fw22/', false);
    const images = imgFolder.keys().map(imgFolder)

    // const img_node = imgFolder(`./${img}.webp`);
    // console.log(img_node);

    // <img src={img_node}/>;

    return (
        <div className="shuffle-image-container">
            <Canvas camera={{ position: [0, 0, 1], fov: 90 }} style={{height: "100vh"}}>
                <group>
                    {images.map(
                        (image, index) =>
                            <mesh key={index}>
                                <Image position={[...randCoordinates(CANV_APOTHEM), 0]} url={image} scale/>
                            </mesh>
                    )
                    }
                </group>
            </Canvas>
        </div>
    );
};


export default ShuffleImageComponent;