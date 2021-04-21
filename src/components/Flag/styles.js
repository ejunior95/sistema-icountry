import styled from 'styled-components';

export const Container = styled.div`
 cursor: pointer;
  @media (min-width: 501px) {
    box-sizing: border-box;
    max-width: 300px;
      max-height: 200px;
    img {
      height: 100%;
      width: 100%;
      box-shadow: 0px 3px 3px #BABABA;
    }
  }
  @media (max-width: 500px) {
    box-sizing: border-box;
    max-width: 100%;
    
    img {
      height: 100%;
      width: 100%;
      box-shadow: 0px 3px 3px #BABABA;
    }
  }
`;
