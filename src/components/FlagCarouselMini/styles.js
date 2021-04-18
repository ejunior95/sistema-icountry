import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 43vh;
  .container-flags {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 38vh;
  }
  .footer-carousel {
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-controles {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50vh;
    height: 3vh;
  }
  .btn-back,
  .btn-next {
      display:flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-shadow: 0px 3px 3px #BABABA;
      border-radius: 5px;
      cursor: pointer;
  }
  .item-carousel {
      display:flex;
      align-items: center;
      justify-content: center;
      padding: 10px 15px 10px 15px;
      box-shadow: 0px 3px 3px #BABABA;
      border-radius: 5px;
      cursor: pointer;
  }
  .item-carousel.active {
      background-color: #6D2080;
      color: #ffffff;
  }
`;