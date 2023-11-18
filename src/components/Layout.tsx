import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};
