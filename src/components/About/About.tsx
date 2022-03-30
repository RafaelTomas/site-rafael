import React, { FunctionComponent } from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import Feature from './Feature';

const About: FunctionComponent = () => {
  return (
    <div id="about">
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading alignItems={'center'}>Sobre mim!</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Olá!
              <br />
              Meu nome é Rafael Tomas e apaixonado por desenvolvimento.
              <br />
              Estou sempre procurando coisas novas para aprender. A web me passa essa oportunidade de aprender, criar, explorar sempre mais, costumo dizer que a web é minha &quot;outra metade&quot;.
              <br />
              Qualquer coisa que possa me ajudar a expandir meu conhecimento é sempre bem-vinda.
              <br />
              Meu lema no trabalho (como na minha vida) é &quot;Voce pode chegar em qualquer lugar&quot;- não diga que você e incapaz, vai e tenta.
              <br />
              Espero que você goste do meu portfólio :)
              <br />  
              Atenciosamente,
              <br />  
              Rafael
            </Text>
           
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src="/About.png"
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default About;