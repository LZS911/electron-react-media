import React from 'react';
import { HeaderComponent } from '../../components';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};

export default Container;
