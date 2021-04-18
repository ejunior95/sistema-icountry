import React from 'react';
import { Container } from './styles';
import InputSelect from '../../components/InputSelect';
import CustomButton from '../../components/CustomButton';
import FlagCarousel from '../../components/FlagCarousel';
import { Link } from 'react-router-dom';

function Home() {
  return(
      <Container>
          <div className="conteudo">
            
            <div className="container-pesquisa">
                <div className="container-inputs">
                  <InputSelect />
                </div>
                <Link to="/details" className="link">
                  <CustomButton />
                </Link>
            </div>
          <FlagCarousel />
          </div>
      </Container>
  );
}

export default Home;