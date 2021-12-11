import React from 'react';
import { HeaderWrapper } from './style';
import Control from './component/Control';
import Nav from './component/Nav';

const HeaderComponent: React.FC = () => {
  return (
    <HeaderWrapper>
      <Control />
      <Nav />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
