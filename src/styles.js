import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    background: linear-gradient(
      28.95deg,
      #91C3D1 -1.26%,
      #91C3D1 4.02%,
      #0097BB 26.17%,
      #1D4282 64.67%,
      #331D75 94.2%
    );
    margin:0;
    min-height: 100vh;
  }
`;

export const theme = {
  primary: '#8DC9BA',
  secondary: 'white',
  green: '#8DC9BA',
  red: '#E08677',
  backgroundColor: '#F6F8FC',
  fontPrimary: '#69688c',
  fontSecondary: '#828282',
  fontLight: '#CFCCCC'
};
