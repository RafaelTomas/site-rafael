import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { About, Footer, Hero, Nav, Skills, Projects } from './components';

function App() {
  return (
    <ChakraProvider>
      <Nav>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
      </Nav>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
