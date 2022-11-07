import React from 'react';
import styled from 'styled-components';

const EidolonBannerComponent = () => {
    return (
        <EidolonBanner>
            <Heading>i am exactly like lana del rey</Heading>
            <Heading>eidolon fw22</Heading>
            <Copyright>© 2022 eidolon</Copyright>
        </EidolonBanner>
    );
};

export const EidolonBanner = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Heading = styled.h1`
    color: white;
    font-family: Helvetica;
    font-size: 800%;
    text-align: center;
    max-height: 80vh;
`;

export const Copyright = styled.p`
    color: white;
    font-size: .8em;
    margin-bottom: 15px;
    position: fixed;
    bottom: 0;
`;

export default EidolonBannerComponent;