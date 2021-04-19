import React from 'react';
import { Container } from './styles';

function Flag(props) {
  
  const {
    url,
    alt
  } = props
  
  return(
      <Container>
          <img src={url} alt={alt} />
      </Container>
  );
}

export default Flag;