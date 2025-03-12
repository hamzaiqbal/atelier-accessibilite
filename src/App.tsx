import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './theme/ThemeProvider';
import { Navigate, Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';
import { Tomatoes } from './components/Tomatoes';
import { Layout } from './components/Layout';
import { WifiForm } from './components/Wifi/WifiForm';
import { WifiCode } from './components/Wifi/WifiCode';
import { WifiSuccess } from './components/Wifi/WifiSuccess';
import { WifiFailure } from './components/Wifi/WifiFailure';
import './styles.css';


const GlobalStyle = createGlobalStyle`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.greybase};
    margin: 0;
    padding: 40px;
    min-height: 100vh;
  }

  .accessible-font {
    font-family: "Fira Code", monospace;
  }
`;

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Navigate to="tomatoes" replace />} />
        <Route path="tomatoes" element={<Tomatoes />} />
        <Route path="wifi-code" element={<WifiCode />} />
        <Route path="wifi-form" element={<WifiForm />} />
        <Route path="wifi-success" element={<WifiSuccess />} />
        <Route path="wifi-failure" element={<WifiFailure />} />
      </Route>
    </Routes>
  );
};

const router = createHashRouter([{ path: '*', Component: routes }]);

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
