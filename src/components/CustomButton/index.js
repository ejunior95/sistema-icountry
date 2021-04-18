import React from 'react';
import { Container } from './styles';

function CustomButton() {
  return(
      <Container>
          <div className="button">
            {/* <MdKeyboardReturn className="icone-btn-voltar" /> */}
            <p className="text-btn">PESQUISAR</p>
          </div>
      </Container>
  );
}

export default CustomButton;