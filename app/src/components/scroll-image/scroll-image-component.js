import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '../../common/hooks/useMediaQuery';
import { device } from '../../common/device-sizes';

const ScrollImageComponent = () => {

    const isNonMobile = useMediaQuery(`${device.laptop}`);
    const imgFolder = (isNonMobile) ? require.context('../../eidolon-fw22/large/', false) : require.context('../../eidolon-fw22/small/', false);
    const imageKeys = imgFolder.keys().map(imgFolder);
    var i = 0;
    console.log(imageKeys);
    
    return (
        <ScrollImageContainer>
            {
                imageKeys.map(element => {
                    return (<ImageContainer key={++i}><Image alt="Runway" src={element}/></ImageContainer>)
                })
            }
        </ScrollImageContainer>
    );
};

export const ScrollImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    width: 100vw;
`;

export const ImageContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Image = styled.img`
    width: 80%;
    margin: 20px 0px 20px 0px;
    @media screen and (min-width: 1024px) { 
        width: 50%;
    }
`;



export default ScrollImageComponent;