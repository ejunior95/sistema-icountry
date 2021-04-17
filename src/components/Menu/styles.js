import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 12px #D1D1D1;

  .logo-menu {
    width: 12vh;
    padding-left: 3vh;
    cursor: pointer;
  }
  .btn-voltar-menu {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #6D2080;
    background-color: transparent;
    color: #6D2080;
    padding: 6px 12px 6px 12px;
    cursor: pointer;
    margin-right: 3vh;
    box-shadow: 0px 5px 5px #BABABA;
    .icone-btn-voltar {
      padding-right: 5px;
      color: #6D2080;
    }
  }


  .btn-voltar-menu:hover {
    background-color: #6D2080;
    color: #ffffff;
  .icone-btn-voltar {
    color: #ffffff;
  }
  }
`;
