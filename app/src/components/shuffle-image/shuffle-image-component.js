import React from 'react';
import styled from 'styled-components';
import { randCoordinates } from '../../common/functions';
import { Image } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useSprings, animated } from "@react-spring/three"
import { useGesture } from "@use-gesture/react"
import useForceUpdate from "../../common/hooks/useForceUpdate";
import refreshArrow from '../../assets/SVG/refresh-arrow.svg';
import cart from '../../assets/SVG/cart.svg';
import ig from '../../assets/SVG/ig-logo.svg';
import './shuffle-image-component.css';

    
const ShuffleImageComponent = () => {

    const forceUpdate = useForceUpdate()
    const CANV_APOTHEM = 2;
    const imgFolder = require.context('../../eidolon-fw22/small/', false);
    const imageKeys = imgFolder.keys().map(imgFolder);

    const [springs, api] = useSprings(imageKeys.length, () => ({ position: [0, 0, 0], scale: [1,1,1] }))

    return (
        <ShuffleImageContainer>
            <Canvas orthographic camera={{ left: window.innerWidth/-2, right: window.innerWidth/2, top: window.innerWidth/-2, bottom: window.innerWidth/2, zoom: 300}} style={{ height: "100vh", overflow: "hidden"}}>
                <group>
                    {springs.map(
                        ({ position, scale}, index) =>
                            <ShuffleImage 
                            imageKeys={imageKeys} 
                            apothem= {CANV_APOTHEM}
                            api={api}
                            key={index} 
                            index={index}
                            position={position}
                            scale={scale}>
                            </ShuffleImage>
                    )
                    }
                </group>
            </Canvas>
            <div className="nav-menu">
                <button onClick={() => forceUpdate()}  className="button nav-item"><img className="arrow" alt="refresh-arrow" src={refreshArrow} /></button>
                <a className="nav-item" href="https://eidolonnyc.myshopify.com/"><img className="cart" alt="cart-logo" src={cart} /></a>
                <a className="nav-item" href="https://www.instagram.com/e.idol.on/"><img className="ig-logo" alt="ig-logo" src={ig} /></a>  
            </div>
        </ShuffleImageContainer>
    );
};

const ShuffleImage= ({ imageKeys, apothem, api, index, position, scale}) => {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;


    const bind = useGesture({
        onDrag: ({ args: [originalIndex], active, offset: [ox, oy] }) => api.start((index) => drag(originalIndex, index, active, ox, oy)),
        onPinch:({ args: [originalIndex], offset}) => api.start((index) => pinch(originalIndex, index, offset)), 
    });

    const drag = (originalIndex, index, active, ox, oy) => {
        if (!active || index !== originalIndex) return
            return { position: [ox / aspect, -oy / aspect, 1]  };
    };

    const pinch = (originalIndex, index, offset) => {
        if (index !== originalIndex || offset[0] < 1)  return { scale: [1,1,1]  }
        console.log(offset[0]);
        return { scale: [offset[0]*1.2, offset[0]*1.2, 1]  };
    };

    return (
        <animated.mesh {...bind(index)}
            position={position}
            scale={scale}
            style={{touchAction: 'none'}}
        >
            <Image position={[...randCoordinates(apothem), 0]} url={imageKeys[index]} />
        </animated.mesh>

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