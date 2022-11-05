import React from 'react';
import styled from 'styled-components';
import './eidolon-banner-component.css';

const EidolonBannerComponent = () => {
    return (
        <EidolonBanner>
            <h1 className="heading lana-heading">i am exactly like lana del rey</h1>
            <h1 className="heading eidolon-heading">eidolon fw22</h1>
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

export default EidolonBannerComponent;