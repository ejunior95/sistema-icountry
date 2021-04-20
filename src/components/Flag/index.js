import React from 'react';
import { Container } from './styles';

function Flag(props) {
  
  const {
    url,
    alt,
    title
  } = props
  
  return(
      <Container>
          <img src={url} alt={alt} title={title} />
      </Container>
  );
}

export default Flag;