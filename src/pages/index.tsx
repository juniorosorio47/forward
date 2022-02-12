import React, { useCallback, useState } from 'react';
import Background from '../components/Background';

import { Container, StartPage, Buttons, Projects } from './styles';

const Home: React.FC = () => {

  return <> 
    <Background />
    <Container>
      <StartPage>
        <h1>Dari Osorio Junior</h1>
        <h2>Full Stack Developer</h2>
        <p>Thinking Forward!</p>
        <Buttons>
          <button>Projects</button>
          <button>Skills</button>
          <button>About Me</button>
        </Buttons>
      </StartPage>
      <Projects>
        
      </Projects>
      

    </Container>
  </>;
}

export default Home;