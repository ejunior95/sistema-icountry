import React from 'react';
import { Container } from './styles';
import FlagCarouselMini from '../../components/FlagCarouselMini';
import Flag from '../../components/Flag';

function Home() {
  return(
      <Container>
          <div className="conteudo">
              <div className="container-flag-info">
                 <Flag />
                 <div className="container-info">
                     <p className="info"><strong>Nome:</strong> Brasil</p>
                     <p className="info"><strong>Capital:</strong> Brasília</p>
                     <p className="info"><strong>Região:</strong> Região</p>
                     <p className="info"><strong>Sub-região:</strong> Sub-região</p>
                     <p className="info"><strong>População:</strong> XXXXXX</p>
                     <p className="info"><strong>Línguas:</strong> Português</p>
                 </div>
              </div>
             <h4 className="titulo-paises">Países vizinhos:</h4>  
             <FlagCarouselMini />
          </div>
      </Container>
  );
}

export default Home;