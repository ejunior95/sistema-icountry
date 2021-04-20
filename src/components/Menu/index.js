import React, { useState } from 'react';
import { Container } from './styles';
import LogoMOVA from '../../assets/Logo-MOVA.png'
import { MdKeyboardReturn } from "react-icons/md";
import { useLocation, useHistory } from 'react-router-dom';

function Menu() {

  let history = useHistory()
  let location = useLocation()
  function ToggleLink() {
    history.goBack()
  } 

  function PagInicial() {
    history.push("/home")
  }

  return(
      <Container>
          <img 
          className="logo-menu"
          src={LogoMOVA} 
          alt="Logo MOVA" 
          onClick={PagInicial}
          title="ICountry - Sistema de consulta de países" 
          />
          
          <div className="btn-voltar-menu" onClick={ToggleLink}>
            <MdKeyboardReturn className="icone-btn-voltar" />
            <p className="text-btn-voltar">Voltar</p>
          </div>
          
      
      </Container>
  );
}

export default Menu;