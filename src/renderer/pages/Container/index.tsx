import React from 'react';
import { useLocation } from 'react-router';

const { ipcRenderer } = window.electronAPI;

const Container: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return <>{children}</>;
};

export default Container;
