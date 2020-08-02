import styled from 'styled-components';
import { isBrowser, isMobile } from 'react-device-detect';

export const Container = styled.div`
  display: flex;
  background: transparent;
  ${isBrowser &&
  `margin: 0 7vh;
    padding-top: 4vh;
    border-top: 1px solid #0097bb;`}
  ${isMobile && `margin: 16px;`}
`;

export const PollContainer = styled.div`
  background: #ffffff;
  border-radius: ${isBrowser ? '15px' : '3px'};
  width: 100%;
  height: 100%;
  .img {
    background: rgba(0, 0, 0, 0.6);
    width: 520px;
    height: 191px;
    mix-blend-mode: hard-light;
    border-radius: 15px 15px 0px 0px;
  }
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
`;
