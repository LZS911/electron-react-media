import React from 'react';
import { useHistory } from 'react-router';
import { HeaderComponent } from '../../components';

const VideoComponent: React.FC = () => {
  const history = useHistory();
  const back = () => {
    history.push('/');
  };
  return (
    <>
      <HeaderComponent />
      <h1>Video</h1>
      <button type="button" onClick={back}>
        {'<'}
      </button>
    </>
  );
};

export default VideoComponent;
