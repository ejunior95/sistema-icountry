import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 501px) {
  .button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #6D2080;
    background-color: #6D2080;
    padding: 8px 20px 8px 20px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 3vh;
    box-shadow: 0px 5px 5px #BABABA;
    box-sizing: border-box;
  }
    .icone-btn {
      padding-right: 5px;
      font-size: 17px;
      color: #6D2080;
      transition: none;
    }
    .text-btn {
      font-size: 15px;
      color: #FFFFFF;
    }
}
@media (max-width: 500px) {
  .button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #6D2080;
    background-color: #6D2080;
    padding: 8px 20px 8px 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 5px 5px #BABABA;
    box-sizing: border-box;
  }
    .icone-btn {
      padding-right: 5px;
      font-size: 17px;
      color: #6D2080;
      transition: none;
    }
    .text-btn {
      font-size: 15px;
      color: #FFFFFF;
    }
}
`;
