import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
 
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import PriceWrapper from './PriceWrapper';

const Skills = () => {
  return (
    <div id="skills">
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Habilidades
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Algumas das minhas Skills s2
          </Text>
        </VStack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('cyan.300', 'cyan.700')}
                  px={3}
                  py={1}
                  color={useColorModeValue('gray.900', 'gray.300')}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl">
                  FrontEnd
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    HTML
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                   CSS
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    JavaScript
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    ReactJs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Bootstrap
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue('cyan.300', 'cyan.700')}
                  px={3}
                  py={1}
                  color={useColorModeValue('gray.900', 'gray.300')}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl">
                  BackEnd
                </Text>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Node.js
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Express
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    MongoDb / Mongoose
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    SQL
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    APIs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Deploy Heroku
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
        </Stack>
      </Box>
    </div>
  );
};

export default Skills;