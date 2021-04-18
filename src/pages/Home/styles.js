import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 12vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .link {
    text-decoration: none;
  }
  @media (min-width: 501px) {
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
}
  @media (max-width: 500px) {
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
  }
  .container-inputs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding-bottom: 2vh;
  }
}
`;
