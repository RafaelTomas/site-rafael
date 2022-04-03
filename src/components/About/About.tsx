import React from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

const About = () => {
  return (
    <div id="about">
      <Container maxW={'7xl'} p="12">
        <Heading
          textAlign="center"
          as="h1" fontSize="4xl">
          Sobre mim
        </Heading>
        <Box>
          <Text
            align={'center'}
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Olá!
            <br />
            <br />
            Meu nome é Rafael Tomás e sou apaixonado por desenvolvimento.<br />
            A Web me passa a oportunidade de aprender, criar e explorar sempre mais.Costumo dizer que a web é minha 
             &quot;outra metade&quot;.
            <br />
            Qualquer coisa que possa me ajudar a expandir meu conhecimento é sempre bem - vinda.
            <br />
            Meu lema no trabalho(como na minha vida) é &quot; Você pode chegar em qualquer lugar&quot;- não digas que és incapaz, vá e tente.
            <br />
            Espero que você goste do meu portfólio. : p
            <br />
            <br />
            Atenciosamente,
            <br />
            Rafael
          </Text>
        </Box>
      </Container >
    </div >
  );
};

export default About;