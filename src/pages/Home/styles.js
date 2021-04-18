import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .conteudo {
    width: 80%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-pesquisa {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container-inputs {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 50%;
  }
`;
