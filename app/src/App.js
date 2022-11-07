
import './App.css';
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
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    touch-action: none;
`;

export default App;
