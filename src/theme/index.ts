import './theme.d.ts';


const toRem = (valueInPx: number) => `${valueInPx / 16}rem`;


const theme = {
  colors: {
    greybase: '#333',
    greylight: '#aaa',
    white: '#fff',
    black: '#000',
    primary: '#00bfb2',
    success: '#6bc95e',
    failure: '#f46262',
  },
  fontSizes: {
    xs: toRem(12),
    sm: toRem(14),
    md: toRem(16),
    lg: toRem(20),
    xl: toRem(24),
    xxl: toRem(36),
    base: toRem(16),
  }
} as const;

export default theme;

export type Theme = typeof theme;
