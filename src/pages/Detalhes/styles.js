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
  .container-flag-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30vh;
    box-sizing: border-box;
  }
  .info {
    padding-left: 15px;
    line-height: 35px;
  }
  .titulo-paises {
    width: 100%;
    text-align: left;
    margin-top: 3vh;
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
