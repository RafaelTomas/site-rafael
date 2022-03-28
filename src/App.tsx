import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { About, Footer, Hero, Nav } from './components';

function App() {
  return (
    <ChakraProvider>
      <Nav>
        <Hero />
        <About />
      </Nav>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
