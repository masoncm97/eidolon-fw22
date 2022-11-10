import React from 'react';
import styled from 'styled-components';

const ScrollImageComponent = ({ data }) => {

    const imgFolder = require.context('../../eidolon-fw22/small/', false);
    const imageKeys = imgFolder.keys().map(imgFolder);
    var i = 0;
    console.log(imageKeys);
    
    return (
        <ScrollImageContainer>
            {
                imageKeys.map(element => {
                    return (<ImageContainer key={++i}><img src={element}/></ImageContainer>)
                })
            }
        </ScrollImageContainer>
    );
};

export const ScrollImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    align-items: center;
    background: none;
    width: 100vw;
`;

export const ImageContainer = styled.div`
    border: 1px solid red;
    background-color: blue;
`;


export default ScrollImageComponent;