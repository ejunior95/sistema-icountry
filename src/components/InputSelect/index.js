import React from 'react';
import { Container } from './styles';

function InputSelect() {
  return(
      <Container>
          <label for="paises">Filtrar por</label>
            <select id="paises" name="paislist">
            <option value="" disabled selected>Escolha uma opção...</option>
                <option value="regiao">Região</option>
                <option value="capital">Capital</option>
                <option value="lingua">Língua</option>
                <option value="pais">País</option>
                <option value="cod-ligacao">Código de ligação</option>
            </select>
      </Container>
  );
}

export default InputSelect;