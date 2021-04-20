import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import { Container } from './styles';
import FlagCarouselMini from '../../components/FlagCarouselMini';
import Flag from '../../components/Flag';
import { api } from '../../services/api';

function Detalhes() {
    
    const location = useLocation();
    const [pais, setPais] = useState([]);

    useEffect(() => {
        
        const {
            filtro,
            filtro2
        } = location.state

        console.log(filtro, filtro2)
            
        if (filtro === "regiao") {
            api.get(`region/${filtro2}`)
            .then(response => {
               const _region = response.data.map(pais => ({
                    name: pais.name,
                    capital: pais.capital,
                    region: pais.region,
                    subregion: pais.subregion,
                    population: pais.population,
                    languages: pais.languages.map(language => language.nativeName),
                    flag: pais.flag
                }))
                setPais(_region)
            })
        }
        if (filtro === "capital") {
            api.get(`capital/${filtro2}`)
            .then(response => {
               const _capital = response.data.map(pais => ({
                    name: pais.name,
                    capital: pais.capital,
                    region: pais.region,
                    subregion: pais.subregion,
                    population: pais.population,
                    languages: pais.languages.map(language => language.nativeName),
                    flag: pais.flag
                }))
                setPais(_capital)
            })
        }
        if (filtro === "lingua") {
            api.get(`lang/${filtro2}`)
            .then(response => {
               const _lang = response.data.map(pais => ({
                    name: pais.name,
                    capital: pais.capital,
                    region: pais.region,
                    subregion: pais.subregion,
                    population: pais.population,
                    languages: pais.languages.map(language => language.nativeName),
                    flag: pais.flag
                }))
                setPais(_lang)
            })
        }
        if (filtro === "pais") {
            api.get(`name/${filtro2}`)
            .then(response => {
               const _pais = response.data.map(pais => ({
                    name: pais.name,
                    capital: pais.capital,
                    region: pais.region,
                    subregion: pais.subregion,
                    population: pais.population,
                    languages: pais.languages.map(language => language.nativeName),
                    flag: pais.flag
                }))
                setPais(_pais)
            })
        }
        if (filtro === "codligacao") {
            api.get(`callingcode/${filtro2}`)
            .then(response => {
               const _codligacao = response.data.map(pais => ({
                    name: pais.name,
                    capital: pais.capital,
                    region: pais.region,
                    subregion: pais.subregion,
                    population: pais.population,
                    languages: pais.languages.map(language => language.nativeName),
                    flag: pais.flag
                }))
                setPais(_codligacao)
            })
        }

    },[])
   
    const paisPrincipal = pais[0] || {}

  return(
      <Container>
          <div className="conteudo">
              <div className="container-flag-info">
              <Flag url={paisPrincipal.flag} alt={paisPrincipal.name} title={paisPrincipal.name} />
              
                 <div className="container-info">
                     <p className="info"><strong>Nome: </strong> {paisPrincipal.name}</p>
                     <p className="info"><strong>Capital: </strong> {paisPrincipal.capital}</p>
                     <p className="info"><strong>Região: </strong> {paisPrincipal.region}</p>
                     <p className="info"><strong>Sub-região: </strong> {paisPrincipal.subregion}</p>
                     <p className="info"><strong>População: </strong> {
                     new Intl.NumberFormat('pt-BR').format(paisPrincipal.population)}</p>
                     <p className="info"><strong>Línguas: </strong>{paisPrincipal.languages?.toString()}</p>
                 </div>
                 
              </div>
             <h4 className="titulo-paises">Países vizinhos:</h4>  
             <FlagCarouselMini />
          </div>
      </Container>
  );
}

export default Detalhes;