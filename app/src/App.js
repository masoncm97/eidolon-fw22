
import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom'
import {useState} from 'react';
import NavMenuComponent from "./components/nav-menu/nav-menu-component"
import EidolonBannerComponent from "./components/eidolon-banner/eidolon-banner-component"
import ShuffleImageComponent from "./components/shuffle-image/shuffle-image-component"
import ScrollImageComponent from "./components/scroll-image/scroll-image-component"
import styled from 'styled-components';

function App() {

  const [update, setUpdate] = useState(false);
  const forceUpdate = () => { setUpdate(!update) };


  return (
    <AppContainer>
      <EidolonBannerComponent></EidolonBannerComponent>
      <Routes>
        <Route exact path="/shuffle" element={<ShuffleImageComponent/>} />
        <Route exact path="/" element={<ScrollImageComponent />} /> 
      </Routes>
      <NavMenuComponent forceUpdate={forceUpdate}></NavMenuComponent>
    </AppContainer>
  );
};


export const AppContainer = styled.div`
    border: 1px solid green;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    overflow: hidden;
`;


export default App;
