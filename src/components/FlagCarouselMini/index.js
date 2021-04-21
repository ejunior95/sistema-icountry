import React, { useState } from 'react';
import { Container } from './styles';
import Flag from '../Flag';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function FlagCarouselMini(props) {
    
     const [pagAtual, setPagAtual] = useState(1)

    const {
        paisesVizinhos
    } = props

    const numeroPaginas = Math.ceil(paisesVizinhos.length / 3)
    
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

    return(
      <Container>
         <div className="container-flags">
        {paisesVizinhos.filter((pais, i) => i+1 > (pagAtual - 1) * 3 && i+1 <= pagAtual * 3 )
        .map(paisVizinho => (
            <Flag url={paisVizinho?.flag} alt={paisVizinho?.name} title={paisVizinho?.name} />
        ))}
    
         </div>
         <div className="footer-carousel">
            <div className="container-controles">
                <div className="btn-back" onClick={retornarPag}>
                    <FaChevronLeft />
                </div>
                
                {paginador}

                <div className="btn-next" onClick={avançarPag}>
                    <FaChevronRight />
                </div>
            </div>
         </div>
      </Container>
  );
}

export default FlagCarouselMini;