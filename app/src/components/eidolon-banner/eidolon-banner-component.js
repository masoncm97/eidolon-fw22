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
    background-color: black;
    height: 100vh;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    overflow: hidden;
    touch-action: none;
`;
export const Heading = styled.h1`
    color: white;
    font-family: Helvetica;
    font-size: 600%;
    text-align: center;
    @media screen and (min-width: 1024px) { 
       font-size: 800%;
    }
`;

export const Copyright = styled.p`
    color: white;
    font-size: .8em;
    margin-bottom: 15px;
    position: fixed;
    bottom: 0;
    display: none;

    @media screen and (min-width: 1024px) { 
        color: white;
        font-size: .8em;
        margin-bottom: 15px;
        position: fixed;
        bottom: 0; 
        display: block;
    }
`;

export default EidolonBannerComponent;