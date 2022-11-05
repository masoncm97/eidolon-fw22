import React from 'react';
import EidolonBannerComponent from '../eidolon-banner/eidolon-banner-component';
import ShuffleImageComponent from '../shuffle-image/shuffle-image-component';
import styled from 'styled-components';

const LandingPageComponent = () => {
    return (
        <LandingPage>
            <EidolonBannerComponent></EidolonBannerComponent>
            <ShuffleImageComponent></ShuffleImageComponent>
        </LandingPage>
    );
};

export const LandingPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export default LandingPageComponent;