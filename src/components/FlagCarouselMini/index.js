import React from 'react';
import { Container } from './styles';
import Flag from '../Flag';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function FlagCarousel() {
  return(
      <Container>
         <div className="container-flags">
            <Flag />
         </div>
         <div className="footer-carousel">
            <div className="container-controles">
                <div className="btn-back">
                    <FaChevronLeft />
                </div>

                <p className="item-carousel active">1</p>
                <p className="item-carousel">2</p>
                <p className="item-carousel">3</p>

                <div className="btn-next">
                    <FaChevronRight />
                </div>
            </div>
         </div>
      </Container>
  );
}

export default FlagCarousel;