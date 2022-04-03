import React from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import Content from './Content';



const Experience = () => {
  return (
    <div id="experience">
      <Box>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>Experiencia</Heading>
            <Text>Algum dos lugares que passei : </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Box alignItems='center'>
              <Content>
                <Heading as={'h3'} fontSize={'xl'}>Desenvolvedor Node.js (Estagiário)</Heading>
                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  fontSize={'sm'}>
                  Compass.uol · Estágio
                  nov de 2021 - fev de 2022 · 4 meses
                </Text>
              </Content>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div >
  );
};

export default Experience;