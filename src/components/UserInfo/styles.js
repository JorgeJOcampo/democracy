import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  background: #e4eef4;
  border-bottom-right-radius: 500px;
  justify-content: flex-end;
  padding-bottom: 24px;
  div {
    margin-top: 5vh;
    margin-right: 4vh;
    height: max-content;
    color: #0097bb;
    font-size: 16px;
    text-align: right;
    line-height: 3px;
  }
  .name {
    border-top: 1px solid #0097bb;
    padding-top: 2vh;
    font-weight: bold;
  }
  .mail {
    padding-bottom: 2vh;
    border-bottom: 1px solid #0097bb;
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
    background: #0097bb;
    border-radius: 18.5px;
    font-family: Montserrat;
    font-weight: 800;
    text-align: center;
    color: #ffffff;
  }
`;
