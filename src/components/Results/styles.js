import styled from 'styled-components';

export const Results = styled.div`
  background: #ffffff;
  border-radius: 22px;
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
  h1 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #0097bb;
    padding: 10px 0px 6px 15px;
    margin: 0 25px 20px 25px;
    border-bottom: 0.4px solid #0097bb;
  }
`;
