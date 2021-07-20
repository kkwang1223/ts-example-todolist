import './App.css';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/Main';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
