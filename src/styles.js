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

export const Sidebar = styled.div`
  width: 312px;
  background: linear-gradient(
    12.47deg,
    #91c3d1 -1.26%,
    #91c3d1 4.02%,
    #0097bb 26.17%,
    #1d4282 64.67%,
    #331d75 94.2%
  );
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 188px;
    height: 125px;
    margin: 4vh 7vh;
  }
`;

export const Content = styled.div`
  background: #e7e9f0;
  width: 100%;
  .polls-container {
    padding: 0 4vh;
    position: absolute;
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
  .pollContent {
    display: flex;
    padding-top: 4vh;
    margin: 0 7vh;
    position: absolute;
    top: 24vh;
    background: transparent;
    border-top: 1px solid #0097bb;
    width: 150vh;
  }
  .sideContent {
    margin-left: 8vh;
  }
  .cardsContainer {
    background: #ffffff;
    border-radius: 22px;
    width: 520px;
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
    }
  }
  .resultsContainer {
    background: #ffffff;
    border-radius: 22px;
    width: 520px;
    margin-bottom: 3vh;
    padding-bottom: 2vh;
    .result {
      display: flex;
    }
    .name {
      width: 110px;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 10px;
      line-height: 2vh;
      color: #0097bb;
      border-right: 1px solid #0097bb;
      padding-left: 45px;
      padding-bottom: 10px;
    }
    .progress {
      width: 219px;
      margin-left: 10px;
      margin-top: 1vh;
      height: 7px;
      background: linear-gradient(90.54deg, #3da9c4 0.01%, #2b2a7a 100.93%),
        #126297;
    }
  }
  .infoContainer {
    background: #ffffff;
    border-radius: 22px;
    width: 520px;
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
  .pollContainer {
    background: #ffffff;
    border-radius: 22px;
    width: 520px;
    .success {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 16px;
      color: #0097bb;
      text-align: center;
      padding: 40px 0;
    }
    .voteBtn {
      text-align: center;
      padding: 40px 0;
    }
    button {
      width: 153px;
      height: 37px;
      background: #0097bb;
      border-radius: 18.5px;
      border: none;
      font-family: Montserrat;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
    }
    .form-check {
      padding: 20px 35px;
      label {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 0;
        color: #109ebf;
      }
    }
    .form-check-input {
      width: 26.87px;
      height: 26.87px;
      color: #0097bb;
      border: 1px solid #0097bb;
      border-radius: 1px;
      margin-right: 20px;
    }
  }
  .img {
    background: rgba(0, 0, 0, 0.6);
    width: 520px;
    height: 191px;
    mix-blend-mode: hard-light;
    border-radius: 20px 20px 0px 0px;
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
  height: 120vh;
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
