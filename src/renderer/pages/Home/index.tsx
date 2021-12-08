import React from 'react';
import { useHistory } from 'react-router';
import { HomeWrapper } from './style';

const Home: React.FC = () => {
  const history = useHistory();
  const videoModel = () => {
    history.push('/video');
  };
  const musicModel = () => {
    history.push('/music');
  };
  return (
    <HomeWrapper>
      <div className="home-content">
        <div className="home-content-type" onClick={videoModel}>
          <span>视频模式</span>
        </div>
        <div className="home-content-type" onClick={musicModel}>
          <span>音频模式</span>
        </div>
      </div>
    </HomeWrapper>
  );
};
export default Home;
