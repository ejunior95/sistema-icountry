import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 501px) {
  width: 55vh;
  height: 30vh;
  background-color: green;
  margin: 1vh;
  }
  @media (max-width: 500px) {
  width: 100%;
  height: 30vh;
  background-color: blue;
  }
`;
