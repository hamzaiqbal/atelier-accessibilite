import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './theme/ThemeProvider';
import { Navigate, Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';
import { Tomatoes } from './components/Tomatoes';
import { News } from './components/News';
import { Layout } from './components/Layout';

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
`;

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Navigate to="tomatoes" replace />} />
        <Route path="tomatoes" element={<Tomatoes />} />
        <Route path="news" element={<News />} />
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
