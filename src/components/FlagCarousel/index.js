import React from 'react';
import { Container } from './styles';
import Flag from '../Flag';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function FlagCarousel(props) {
  
  const {
      state
  } = props

    return(
      <Container>
         <div className="container-flags">
            <Flag url="https://restcountries.eu/data/bra.svg" alt="Brasil" title="Brasil" />
            <Flag url="https://restcountries.eu/data/jpn.svg" alt="Japão" title="Japão" />
            <Flag url="https://restcountries.eu/data/deu.svg" alt="Alemanha" title="Alemanha" />
         </div>
         <div className="footer-carousel">
            <div className="container-controles">
                <div className="btn-back">
                    <FaChevronLeft className="icon-btn" />
                </div>

                <p className="item-carousel active">1</p>
                <p className="item-carousel">2</p>
                <p className="item-carousel">3</p>
                <p className="item-carousel">4</p>
                <p className="item-carousel">5</p>

                <div className="btn-next">
                    <FaChevronRight className="icon-btn" />
                </div>
            </div>
         </div>
      </Container>
  );
}

export default FlagCarousel;