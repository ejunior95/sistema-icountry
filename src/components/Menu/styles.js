import styled from 'styled-components';

export const Container = styled.div`
background-color: #ffffff;
 @media (min-width: 501px) {
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #6D2080;
    background-color: transparent;
    padding: 6px 15px 6px 15px;
    cursor: pointer;
    margin-right: 3vh;
    box-shadow: 0px 5px 5px #BABABA;
    box-sizing: border-box;
  }
  .btn-voltar-menu:hover {
    background-color: #6D2080;
    color: #ffffff;
    .icone-btn-voltar {
      color: #ffffff;
    }
    .text-btn-voltar {
      color: #ffffff;
    }
  }
    .icone-btn-voltar {
      padding-right: 5px;
      font-size: 17px;
      color: #6D2080;
      transition: none;
    }
    .text-btn-voltar {
      font-size: 17px;
      color: #6D2080;
    }
 }
 @media (max-width: 500px) {
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 1vh 1vh 1vh 1vh;
    margin-right: 3vh;
    box-sizing: border-box;
    cursor: pointer;
  }
  .btn-voltar-menu:active {
    border: 2px solid #6D2080;
  }
    .icone-btn-voltar {
      font-size: 25px;
      color: #6D2080;
      transition: none;
    }
    .text-btn-voltar {
      display: none;
    }
 }
`;
