import React, { useState } from 'react';
import { Container } from './styles';
import LogoMOVA from '../../assets/Logo-MOVA.png'
import { MdKeyboardReturn } from "react-icons/md";
import { useLocation, useHistory } from 'react-router-dom';

function Menu() {

  let history = useHistory()
  let location = useLocation()
  function ToggleLink() {

    if (location.pathname === '/home') {
      history.push("/details")
    } else if (location.pathname === '/details') {
      history.push("/home")
    } else {
      history.push("/home")
    }
  } 

  return(
      <Container>
          <img className="logo-menu" src={LogoMOVA} alt="Logo MOVA" />
          
          <div className="btn-voltar-menu" onClick={ToggleLink}>
            <MdKeyboardReturn className="icone-btn-voltar" />
            <p className="text-btn-voltar">Voltar</p>
          </div>
          
      
      </Container>
  );
}

export default Menu;