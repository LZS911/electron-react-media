import React from 'react';
import { useHistory } from 'react-router';

const VideoComponent: React.FC = () => {
  const history = useHistory();
  const back = () => {
    history.push('/music');
  };
  return (
    <>
      <h1>Video</h1>
      <button type="button" onClick={back}>
        {'<'}
      </button>
    </>
  );
};

export default VideoComponent;
