import styled from 'styled-components';

export const Container = styled.div`
 @media (min-width: 501px) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
  label {
    padding-left: 5px;
    padding-bottom: 3px;
    color: #6D2080;
    font-weight: 600;
  }
  select {
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #8D8D8D;
    outline: none;
    width: 250px;
  }
  select:hover > option:checked {
    background-color: #6D2080 !important;
    color: #ffffff;
  }
 }
 @media (max-width: 500px) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  label {
    padding-left: 5px;
    padding-bottom: 3px;
    color: #6D2080;
    font-weight: 600;
    width: 100%;
  }
  select {
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #8D8D8D;
    outline: none;
    width: 100%;
  }
  select:hover > option:checked {
    background-color: #6D2080 !important;
    color: #ffffff;
  }
}
`;
