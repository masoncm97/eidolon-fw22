import styled from "styled-components";
import { device } from '../device-sizes';

export const StaticPage = styled.div`
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    border: 1px solid purple;
`;

export const Container = styled.div`
    display: flex;
`;

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const VerticalContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid blue;

`;

export const ResponsiveContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid blue;
    justify-content: space-between;

    @media ${device.laptop} { 
        flex-direction: row;
    }
`;