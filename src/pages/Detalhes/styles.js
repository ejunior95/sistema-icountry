import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 12vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 501px) {
  .conteudo {
    width: 80%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
}
  @media (max-width: 500px) {
  .conteudo {
    width: 80%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: green;
  }
}
`;
