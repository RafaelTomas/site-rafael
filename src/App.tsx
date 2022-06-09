import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { About, Footer, Hero, Nav, Skills, Projects, Contact } from './components';

function App() {
  return (
    <ChakraProvider>
      <Nav>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact />
      </Nav>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
