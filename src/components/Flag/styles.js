import styled from 'styled-components';

export const Container = styled.div`
 cursor: pointer;
  @media (min-width: 501px) {
    max-width: 50vh;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0px 3px 3px #BABABA;
    }
  }
  @media (max-width: 500px) {
  width: 100%;
  height: 30vh;
  background-color: blue;
  }
`;
