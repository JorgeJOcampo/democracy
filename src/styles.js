import styled, { createGlobalStyle } from 'styled-components';

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
  background: #ffffff;
  border: solid 1px #fff;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  color: #000000;
  margin-top: 20px;
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
  color: #cce6ed;
`;

export const Content = styled.div`
  background: #e7e9f0;
  min-height: 100vh;
  width: 100%;
  .polls-container {
    padding: 0 4vh;
    left: 0vh;
    top: 25vh;
    width: 31vh;
  }
  .title {
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    border-bottom: 0.4px solid #ffffff;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .sideContent {
    margin-left: 8vh;
  }
  .cardsContainer {
    background: #ffffff;
    border-radius: 22px;
    margin-bottom: 3vh;
    .content {
      display: flex;
    }
    p {
      padding: 0 0px 20px 40px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      color: #000000;
      width: 200px;
    }
    .cards {
      display: flex;
      margin-left: 5vh;
      padding-top: 1vh;
    }
    .card {
      width: 35px;
      height: 57px;
      background: #0097bb;
      border-radius: 1px;
      margin-right: 4vh;
    }
    .card-rotated {
      width: 35px;
      height: 57px;
      background: #0097bb;
      border-radius: 1px;
      transform: rotate(19.92deg);
      margin-right: 4vh;
    }
  }

  .infoContainer {
    background: #ffffff;
    border-radius: 22px;
    padding: 20px 0;
    div {
      padding: 10px 35px;
    }
    .infoDate {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #bec3c4;
    }
    .date {
      font-family: Montserrat;
      font-size: 16px;
      line-height: 20px;
      color: #0097bb;
    }
  }
  .cardsContainer h1,
  .resultsContainer h1,
  .infoContainer h1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #0097bb;
    padding: 10px 0px 6px 15px;
    margin: 0 25px 20px 25px;
    border-bottom: 0.4px solid #0097bb;
  }
  .pollTitle {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #0097bb;
    text-transform: uppercase;
    padding: 20px 0px 6px 15px;
    margin: 0 25px;
    border-bottom: 0.4px solid #0097bb;
  }
`;

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Poll = styled.div`
  display: flex;
  padding: 1vh 0;
  .pollImg {
    width: 50px;
    height: 29px;
    background: #ffffff;
    border-radius: 4px;
    margin-right: 15px;
  }
  .pollDate {
    font-family: Roboto;
    font-weight: normal;
    font-size: 10px;
    line-height: 0;
    color: #ffffff;
  }
  .pollName {
    font-family: Roboto;
    font-weight: bold;
    font-size: 12px;
    line-height: 0;
    color: #ffffff;
  }
`;
