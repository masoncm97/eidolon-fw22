
import './App.css';
import ShuffleImageComponent from "./components/shuffle-image/shuffle-image-component";
import LandingPageComponent from "./components/landing-page/landing-page-component";
import {
  Routes,
  Route
} from 'react-router-dom'
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route exact path="/" element={<LandingPageComponent />} />
      </Routes>
    </AppContainer>
  );
}

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    min-width: 100vw;
    min-height: 100vh;
    border: 1px solid blue;
`;

export default App;
