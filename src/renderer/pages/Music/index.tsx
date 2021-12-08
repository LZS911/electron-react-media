import React from 'react';
import { useHistory } from 'react-router';

const MusicComponent: React.FC = () => {
  const history = useHistory();
  const back = () => {
    history.push('/');
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
