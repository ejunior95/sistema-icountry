import React from 'react';
import { Container } from './styles';
import LogoMOVA from '../../assets/Logo-MOVA.png'
import { MdKeyboardReturn } from "react-icons/md";

function Menu() {
  return(
      <Container>
          <img className="logo-menu" src={LogoMOVA} alt="Logo MOVA" />
          <div className="btn-voltar-menu">
            <MdKeyboardReturn className="icone-btn-voltar" />
            <p className="text-btn-voltar">Voltar</p>
          </div>
      </Container>
  );
}

export default Menu;