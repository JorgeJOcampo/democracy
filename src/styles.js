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

export const Sidebar = styled.div`
      width: 312px;
      background: linear-gradient(12.47deg, #91C3D1 -1.26%, #91C3D1 4.02%, #0097BB 26.17%, #1D4282 64.67%, #331D75 94.2%);
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
      background: #E7E9F0;
      width: 100%;
      .polls-container {
        padding: 0 4vh;
        position: absolute;
        left: 0vh;
        top: 25vh;
        width: 31vh;
      }
      .title{
        font-family: Roboto;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        border-bottom: 0.4px solid #FFFFFF;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
      .pollContent{
        display: flex;
        padding-top: 4vh;
        margin: 0 7vh;
        position: absolute;
        top: 24vh;
        background: transparent;
        border-top: 1px solid #0097BB;
        width: 150vh;
      }
      .sideContent {
        margin-left: 8vh;
      }
      .cardsContainer{
        background: #FFFFFF;
        border-radius: 22px;
        width: 520px;
        margin-bottom: 3vh;
        .content {
          display: flex;
        }
        p{
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
          background: #0097BB;
          border-radius: 1px;
          margin-right: 4vh;
        }
        .card-rotated {  
          width: 35px;
          height: 57px;        
          background: #0097BB;
          border-radius: 1px;
          transform: rotate(19.92deg);
        }
      }
      .resultsContainer {
        background: #FFFFFF;
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
          color: #0097BB;
          border-right: 1px solid #0097BB;
          padding-left: 45px;
          padding-bottom: 10px;
        }
        .progress {       
          width: 219px;
          margin-left: 10px;
          margin-top: 1vh;
          height: 7px;
          background: linear-gradient(90.54deg, #3DA9C4 0.01%, #2B2A7A 100.93%), #126297;
        }
      }
      .infoContainer{
        background: #FFFFFF;
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
          color: #BEC3C4;
        }
        .date {
          font-family: Montserrat;
          font-size: 16px;
          line-height: 20px;
          color: #0097BB;
        }
      }
      .cardsContainer h1,
      .resultsContainer h1,
      .infoContainer h1 {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #0097BB;
        padding: 10px 0px 6px 15px;
        margin: 0 25px 20px 25px;
        border-bottom: 0.4px solid #0097BB;
      }
      .pollContainer{
        background: #FFFFFF;
        border-radius: 22px;
        width:520px;
        .success {
          font-family: Montserrat;
          font-weight: bold;
          font-size: 16px;
          color: #0097BB;
          text-align: center;
          padding: 40px 0;
        }
        .voteBtn {
          text-align: center;
          padding: 40px 0
        }
        button {
          width: 153px;
          height: 37px;
          background: #0097BB;
          border-radius: 18.5px;
          border: none;
          font-family: Montserrat;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;
        }
        .form-check {
          padding: 20px 35px;
          label {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 0;
            color: #109EBF;
          }
        }
        .form-check-input{
          width: 26.87px;
          height: 26.87px;
          color: #0097BB;
          border: 1px solid #0097BB;
          border-radius: 1px;
          margin-right: 20px;
        }
      }
      .img {
        background: rgba(0,0,0,0.6);
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
        color: #0097BB;
        text-transform: uppercase;
        padding: 20px 0px 6px 15px;
        margin: 0 25px;
        border-bottom: 0.4px solid #0097BB;
      }
`;

export const Container = styled.div`
      display: flex;
      height: 120vh;
`;

export const UserInfo = styled.div`
      display: flex;
      background: #E4EEF4;
      height: 60%;
      border-bottom-right-radius: 500px;
      justify-content: flex-end;
      div{
        margin-top: 5vh;
        margin-right: 4vh;
        height: max-content;
        color: #0097BB;
        font-size: 16px;
        text-align: right;
        line-height: 3px;
      }
      .name {
        border-top: 1px solid #0097BB;
        padding-top: 2vh;
        font-weight: bold;
      }
      .mail{
        padding-bottom: 2vh;
        border-bottom: 1px solid #0097BB;
      }
      img {
        border-radius: 50px;
        width: 96px;
        height: 97px;
        margin-right: 10vh;
        margin-top: 4vh;
      }
      button {
        width: 130px;
        height: 30px;
        border: none;
        background: #0097BB;
        border-radius: 18.5px;
        font-family: Montserrat;
        font-weight: 800;
        text-align: center;
        color: #FFFFFF;
      }
`;

export const Poll = styled.div`
    display: flex;
    padding: 1vh 0;
    .pollImg {
      width: 50px;
      height: 29px;
      background: #FFFFFF;
      border-radius: 4px;
      margin-right: 15px;
    }
    .pollDate {
      font-family: Roboto;
      font-weight: normal;
      font-size: 10px;
      line-height: 0;
      color: #FFFFFF;
    }
    .pollName {
      font-family: Roboto;
      font-weight: bold;
      font-size: 12px;
      line-height: 0;
      color: #FFFFFF;
    }
`;