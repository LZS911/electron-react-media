import React from 'react';
import { useHistory } from 'react-router';
import { HeaderComponent } from '../../components';

const MusicComponent: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <HeaderComponent />
      <h1>Music</h1>
    </>
  );
};

export default MusicComponent;
