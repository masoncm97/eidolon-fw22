import React, { useState, useRef } from 'react';
import { extend } from '@react-three/fiber'
import styled from 'styled-components';
import { randCoordinates } from '../../common/functions';
import { Image, OrthographicCamera } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useSpring, a, useSprings, animated } from "@react-spring/three"
import { useGesture, useDrag } from "@use-gesture/react"
import useForceUpdate from "../../common/hooks/useForceUpdate";
import './shuffle-image-component.css';

const fn =
    ({ aspect, active = false, x = 0, y = 0 }) => {
        // console.log(active);
        return (index) => {
            return active
                ? {
                    x: x / aspect,
                    y: -y / aspect,
                    scale: 1.1,
                    zIndex: 1,
                }
                : {
                    x: 0,
                    y: 0,
                    scale: 1,
                    zIndex: 0,
                }
        }
    }

const dragInit = {
    x: 0,
    y: 0,
    scale: 1.1,
    zIndex: 1,
};


const ShuffleImageComponent = () => {

    const forceUpdate = useForceUpdate();
    // const { size, viewport } = useThree();
    //const aspect = window.innerHeight / window.innerWidth;
    //console.log(aspect);

    // const aspect = useRef(0);
    const CANV_APOTHEM = 2;
    const imgFolder = require.context('../../eidolon-fw22/', false);
    const imageKeys = imgFolder.keys().map(imgFolder);

    const [springs, api] = useSprings(imageKeys.length, (index) => ({ position: [0, 0, 0] }))

    // const bind = useDrag(({ active, offset: [ox, oy] }) => {
    //     api.start(() => ({ position: [ox / aspect, -oy / aspect, 0] }));
    // });

    // const focusIndex = 99;
    // const imagesRef = useRef(imageKeys.map((_, index) => index));
    // console.log("shit");
    // console.log(imagesRef.current);
    // const [springs, api] = useSprings(imageKeys.length, fn(imagesRef.current));
    // console.log(springs);
    // console.log(imageKeys);

    // const bind = useDrag(({ active, movement: [x, y, z] }) => {
    //     //const curIndex = imagesRef.current.indexOf(originalIndex)
    //     // const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    //     // const newOrder = swap(order.current, curIndex, curRow)
    //     api.start(fn(active, x, y, z)) // Feed springs new style data, they'll animate the view without causing a single render
    //     // if (!active) order.current = newOrder
    // })

    //console.log(springs);

    return (
        <ShuffleImageContainer>
            <Canvas camera={{ position: [0, 0, 1], fov: 90 }} style={{ height: "100vh", overflow: "hidden"}}>
                <group>
                    {springs.map(
                        ({ position }, index) =>
                            <ShuffleImage 
                            imageKeys={imageKeys} 
                            apothem= {CANV_APOTHEM}
                            api={api}
                            key={index} 
                            index={index}
                            position={position}>
                            </ShuffleImage>
                    )
                    }
                </group>
            </Canvas>
            <div className="nav-menu">
                <button onClick={() => forceUpdate()}>shuffle</button>
                <p>and drag to navigate</p>
            </div>
        </ShuffleImageContainer>
    );
};

const ShuffleImage= ({ imageKeys, apothem, api, index, position }) => {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    // const bind = useDrag(({ args: [originalIndex], active, offset: [ox, oy] }) => {
    //     api.start((index) => {
    //         if (!active || index != originalIndex) return
    //         return { position: [ox / aspect, -oy / aspect, 100/aspect]  };
    //     }
    //     )}
    // );

    const bind = useGesture({
        onDrag: ({ args: [originalIndex], active, offset: [ox, oy] }) => api.start((index) => drag(originalIndex, index, active, ox, oy)),
    });

    const drag = (originalIndex, index, active, ox, oy) => {
        if (!active || index != originalIndex) return
            return { position: [ox / aspect, -oy / aspect, 75/aspect]  };
    };

    // const imagesRef = useRef(imageKeys.map((_, index) => index));

    // const [spring, api] = useSpring(() => ({
    //      x: 0, y: 0, zIndex: 0 
    // }));

    // const bind = useGesture({
    //     onDrag: ({ offset: [x, y] }) => api.start(position: [x: x / aspect, y: -y / aspect], zIndex: 1 }),
    // });

    // const [spring, set] = useSpring(() => ({ position: [0, 0, 0] }))
    // const bind1 = useGesture({
    //     onDrag: ({ offset: [x, y] }) => set({ position: [x / aspect, -y / aspect, 0] })
    // })


    // console.log(imagesRef.current);
    //const [springs, api] = useSprings(imageKeys.length, fn({aspect}));
    // console.log(springs);
    // console.log(imageKeys);

    // Working attempt

    // const [spring, api] = useSpring(() => ({ position: [0,0,0] }));

    // const bind1 = useDrag(({ active, offset: [ox, oy] }) => {
    //     api.start({position: [ox/aspect,-oy/aspect,0]});
    // });

    // working

    // const [springs, api] = useSprings(imageKeys.length, index => ({ position: [0,0,0] }))

    // const bind = useDrag(({ active, offset: [ox, oy] }) => {
    //     api.start( index => ({position: [ox/aspect,-oy/aspect,0]}));
    // });

    // // Update springs with new props
    // api.start(index => ({ opacity: 0 }))
    // // Stop all springs
    // api.stop()



    //const curIndex = imagesRef.current.indexOf(originalIndex)
    // const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    // const newOrder = swap(order.current, curIndex, curRow)
    // console.log("lit");
    // console.log(active);
    // console.log(x);
    // console.log(y);
    // console.log(active);
    // console.log(index);
    //console.log(fn(aspect, active, x, y));
    //api.start(fn(aspect, active, x, y)()) // Feed springs new style data, they'll animate the view without causing a single render
    // if (!active) order.current = newOrder
    //});

    return (
        <animated.mesh {...bind(index)}
            position={position}
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