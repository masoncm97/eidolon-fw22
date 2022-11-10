import React, {useRef} from 'react';
import styled from 'styled-components';
import { randCoordinates } from '../../common/functions';
import { Image } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useSprings, animated } from "@react-spring/three"
import { useGesture } from "@use-gesture/react";
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';
import './shuffle-image-component.css';


    
const ShuffleImageComponent = () => {

    
    const CANV_APOTHEM = 2;
    const isNonMobile = useMediaQuery(`${device.laptop}`);
    const imgFolder = (isNonMobile) ? require.context('../../eidolon-fw22/large/', false) : require.context('../../eidolon-fw22/small/', false);
    const imageKeys = imgFolder.keys().map(imgFolder);
    const draggingIndex = useRef(-1);
    const [springs, api] = useSprings(imageKeys.length, () => ({ position: [0, 0, 0] }))


    return (
        <ShuffleImageContainer>
            <Canvas orthographic camera={{ left: window.innerWidth/-2, right: window.innerWidth/2, top: window.innerWidth/-2, bottom: window.innerWidth/2, zoom: 300}} style={{ height: "100vh", overflow: "hidden"}}>
                <group>
                    {springs.map(
                        ({ position}, index) =>
                            <ShuffleImage 
                            imageKeys={imageKeys} 
                            apothem= {CANV_APOTHEM}
                            api={api}
                            key={index} 
                            index={index}
                            position={position}
                            draggingIndex={draggingIndex}
                            >
                            </ShuffleImage>
                    )
                    }
                </group>
            </Canvas>
        </ShuffleImageContainer>
    );
};

const ShuffleImage= ({ imageKeys, apothem, api, index, position, draggingIndex}) => {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    const bind = useGesture({
        onDragStart: ({ args: [originalIndex]}) => pickTopImage(originalIndex),
        onDrag: ({ args: [originalIndex], active, offset: [ox, oy] }) => api.start((index) => drag(originalIndex, index, active, ox, oy)),
        onDragEnd: () => { draggingIndex.current = -1 }
    });

    const pickTopImage = (originalIndex) => {
         console.log(originalIndex);
        if(originalIndex > draggingIndex.current) {
            draggingIndex.current = originalIndex;
            console.log(draggingIndex);
        }
    };

    const drag = (originalIndex, index, active, ox, oy) => {
        if (!active || index !== originalIndex || draggingIndex.current != originalIndex) return
            return { position: [ox / aspect, -oy / aspect, 0]  };
    };

    return (
        <animated.mesh {...bind(index)}
            position={position}
            style={{touchAction: 'none'}}
        >
            <Image position={[...randCoordinates(apothem), 0]} url={imageKeys[index]} />
        </animated.mesh>

    );
};

export const ShuffleImageContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    touch-action: none;
`;


export default ShuffleImageComponent;