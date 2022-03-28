import React, { FunctionComponent } from 'react';
import { Link, useColorModeValue } from '@chakra-ui/react';
import { NavLinkProps } from './types';

const NavLink: FunctionComponent<NavLinkProps> = ({ label, url }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={url}>
    {label}
  </Link>
);

export default NavLink;