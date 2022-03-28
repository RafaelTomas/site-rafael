import React, { FunctionComponent } from 'react';
import { HeaderProps } from './types';

const Header: FunctionComponent<HeaderProps> = ({ text, children }) => {
  return (
    <>
      <span onClick={() => alert('olá.')}>{text}</span>
      {children}
    </>
  );
};

export default Header;
