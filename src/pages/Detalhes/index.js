import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import { Container } from './styles';
import FlagCarouselMini from '../../components/FlagCarouselMini';
import Flag from '../../components/Flag';
import { api } from '../../services/api';

function Detalhes() {
    
    const location = useLocation();
    const [regiao, setRegiao] = useState([]);

    useEffect(() => {
    
        const {
            filtro,
            filtro2,
            responseAPI
        } = location.state
    
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
                setRegiao(_region)
            })
        }

    },[])
    const paisPrincipal = regiao[0] || {}
  return(
      <Container>
          <div className="conteudo">
              <div className="container-flag-info">
              <Flag url={paisPrincipal.flag} alt={paisPrincipal.name} />
              
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