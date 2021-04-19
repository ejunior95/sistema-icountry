import React from 'react';
import { Container } from './styles';

function Flag(props) {
  
  const {
    siglaPais,
    alt
  } = props
  
  return(
      <Container>
          <img src={`https://flagcdn.com/${siglaPais}.svg`} alt={alt} />
      </Container>
  );
}

export default Flag;