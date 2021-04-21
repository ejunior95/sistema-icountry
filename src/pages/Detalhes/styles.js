import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 501px) {
  margin-top: 15vh;
  .conteudo {
    width: 80%;
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
    margin-top: 5vh;
  }
}
  @media (max-width: 500px) {
    margin-top: 20vh;
  .conteudo {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-flag-info {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
  }
  .container-info {
    width: 100%;
  }
  .info {
    padding-left: 5px;
    line-height: 35px;
  }
  .titulo-paises {
    width: 100%;
    text-align: left;
    margin: 5vh 0vh 5vh 0vh;
  }
}
`;
