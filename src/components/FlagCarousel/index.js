import React, { useState } from 'react';
import { Container } from './styles';
import Flag from '../Flag';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function FlagCarousel(props) {
    const [pagAtual, setPagAtual] = useState(1)

  const {
      paises = [],
      onClick 
  } = props

  
  let numeroPaginas = Math.ceil(paises.length / 3)
  if (numeroPaginas > 5) numeroPaginas = 5
    
  const paginador = [];
      for (let i = 1; i <= numeroPaginas; i++) {
          if (i === pagAtual) {
              paginador.push(
              <p className="item-carousel active">{i}</p>
              );
          } else {
              paginador.push(
              <p className="item-carousel" onClick={() => setPagAtual(i)}>{i}</p>
              );
          }
      }

      function retornarPag() {
        if ((pagAtual - 1 ) < 1) return 
        setPagAtual(pagAtual -1)
    }
    function avançarPag() {
        if ((pagAtual + 1) > numeroPaginas) return 
        setPagAtual(pagAtual +1)
    }
    console.log(typeof paises)
    return(
      <Container>
         <div className="container-flags">
         {paises?.filter((pais, i) => i + 1 > (pagAtual - 1) * 3 && i + 1 <= pagAtual * 3 )
        .map(pais => (
            <Flag url={pais?.flag} alt={pais?.name} title={pais?.name} onClick={onClick} />
        ))}
         </div>
         <div className="footer-carousel">
            <div className="container-controles">
                <div className="btn-back" onClick={retornarPag}>
                    <FaChevronLeft className="icon-btn" />
                </div>
                
                {paginador}

                <div className="btn-next">
                    <FaChevronRight className="icon-btn" onClick={avançarPag} />
                </div>
            </div>
         </div>
      </Container>
  );
}

export default FlagCarousel;