import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Blob from './Blob';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('cyan.50', 'cyan.400')}
          />
          <Image
            borderRadius={'35%'}
            alt={'Rafael Perfil Image'}
            align={'center'}
            w={'90%'}
            h={'85%'}
            src="/logo.png"
          />
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: '\'\'',
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'cyan.400',
                zIndex: -1,
              }}>
              Eu sou Rafael
            </Text>
            <br />
            <Text as={'span'} color={'cyan.400'}>
              Seja bem-vindo!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}
