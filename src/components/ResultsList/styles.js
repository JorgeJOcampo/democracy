import styled from 'styled-components';

export const Bar = styled.div`
  width: calc(${({ total }) => total}*10px);
  margin-left: 10px;
  margin-top: 1vh;
  height: 7px;
  background: linear-gradient(90.54deg, #3da9c4 0.01%, #2b2a7a 100.93%), #126297;
`;
