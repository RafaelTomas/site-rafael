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
            Meu nome é Rafael Tomas e apaixonado por desenvolvimento.
            <br />
            Estou sempre procurando coisas novas para aprender. A web me passa essa oportunidade de aprender, criar, explorar sempre mais, costumo dizer que a web é minha &quot;outra metade&quot;.
            <br />
            Qualquer coisa que possa me ajudar a expandir meu conhecimento é sempre bem-vinda.
            <br />
            Meu lema no trabalho (como na minha vida) é &quot;Voce pode chegar em qualquer lugar&quot;- não diga que você e incapaz, vai e tenta.
            <br />
            Espero que você goste do meu portfólio :p
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