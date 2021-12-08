const { ipcRenderer } = window.electronAPI;
import React from 'react';
import { HeaderWrapper, ButtonWrapper } from './style';

const HeaderComponent: React.FC = () => {
  const back = () => {
    ipcRenderer.myPing();
    ipcRenderer.once('ipc-example', (arg: any) => {
      console.log(arg);
    });
  };
  return (
    <HeaderWrapper>
      <ButtonWrapper onClick={back}>{'<'}</ButtonWrapper>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
