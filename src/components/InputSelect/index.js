import React from 'react';
import { Container } from './styles';

function InputSelect(props) {
  
  const {
    label,
    value,
    options,
    onChange
  } = props
  console.log(options)
  return(
      <Container>
          <label for={label}>{label}</label>
            <select value={value} id="filtros" onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled selected>Escolha uma opção...</option> {
              options.map(option => <option value={option.value}>{option.option}</option>)
            }
            </select>
      </Container>
  );
}

export default InputSelect;