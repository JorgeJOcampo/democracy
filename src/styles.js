import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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

export const LoginBox = styled.div`
      padding: 10% 0 0 0;
      text-align: center;
      display: flex;
      flex-direction: column; 
`;

export const LoginButton = styled.button`
      place-self: center;
      width: 386.34px;
      height: 53px;
      background: #FFFFFF;
      border: solid 1px #FFF;
      border-radius: 4px;
      font-family: Roboto;
      font-size: 14px;
      color: #000000;
      margin-top:20px;
`;

export const Logo = styled.img`
      width: 388px;
      align-self: center;
`;

export const BottomText = styled.p`
      padding-top: 10%;
      width: 394px;
      font-family: Roboto;
      font-size: 18px;
      line-height: 21px;
      place-self: center;
      color: #CCE6ED;
`;
