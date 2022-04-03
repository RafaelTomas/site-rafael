import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { About, Footer, Hero, Nav, Skills, Experience } from './components';

function App() {
  return (
    <ChakraProvider>
      <Nav>
        <Hero />
        <About />
        <Skills />
        <Experience />

      </Nav>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
