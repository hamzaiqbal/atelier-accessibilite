import { FC, ReactNode } from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import defaultTheme, { Theme } from './';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = defaultTheme }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);
