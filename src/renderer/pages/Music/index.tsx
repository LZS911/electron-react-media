import React from 'react';
import { useHistory, useLocation } from 'react-router';

const MusicComponent: React.FC = () => {
  const history = useHistory();
  const back = () => {
    history.push('/video');
  };
  return (
    <>
      <h1>Music</h1>
      <button type="button" onClick={back}>
        {'<'}
      </button>
    </>
  );
};

export default MusicComponent;
