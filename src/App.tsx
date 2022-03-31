import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { About, Footer, Hero, Nav, Skills } from './components';

function App() {
  return (
    <ChakraProvider>
      <Nav>
        <Hero />
        <About />
        <Skills/>
      </Nav>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
