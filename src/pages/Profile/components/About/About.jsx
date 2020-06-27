import React from 'react';

import { Container } from './AboutStyles';

function About({ aboutUser }) {
  return (
    <Container>
      <h2>Sobre o usuário:</h2>
      <p>
        {!aboutUser &&
          'O usuário ainda não colocou nenhuma informação sobre ele'}
        {aboutUser && aboutUser}
      </p>
    </Container>
  );
}

export default About;
