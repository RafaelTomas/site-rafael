import React from 'react';
import {
  Image,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Box,
  HStack
} from '@chakra-ui/react';

const About = () => {
  return (
    <div id="about">
      <Container maxW='8xl'>
        <Heading
          textAlign="center"
          as="h1" fontSize="4xl">
          Sobre mim
        </Heading>
        <HStack >
          <Box>
            <Text
              align="left"
              marginTop="70px"
              color={useColorModeValue('gray.700', 'gray.200')}>
              Olá!
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
              Rafael
            </Text>
          </Box>
          <Box >
            <Image
              borderRadius='full'
              align='right'
              src='/About.png' />
          </Box>
        </HStack>
      </Container >
    </div >
  );
};

export default About;