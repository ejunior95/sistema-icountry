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
            <Flag />
         </div>
         <div className="footer-carousel">
            <div className="container-controles">
                <div className="btn-back">
                    <FaChevronLeft />
                </div>

                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>

                <div className="btn-next">
                    <FaChevronRight />
                </div>
            </div>
         </div>
      </Container>
  );
}

export default FlagCarousel;