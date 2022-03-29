import React, { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';
import { NavLinkProps } from './types';

const Links: Array<NavLinkProps> = [
  { label: 'Sobre mim', url: '#about' },
  { label: 'Habilidades', url: '#skills' },
  { label: 'Experiencia', url: '#experience' },
  { label: 'Educação', url: '#education' },
  { label: 'Contato', url: '#contact' }
];


const Nav: FunctionComponent = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ url, label }) => (
                <NavLink key={url} url={url} label={label} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box p={4}>Rafael Tomás</Box>
            <Stack direction={'row'} spacing={7} />
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ url, label }) => (
                <NavLink key={url} url={url} label={label} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box p={4}>{children}</Box>

    </>
  );
};

export default Nav;