const { ipcRenderer } = window.electronAPI;
import React from 'react';
import { useHistory } from 'react-router';
import { HeaderWrapper } from './style';

const HeaderComponent: React.FC = () => {
  const [data, setData] = React.useState({ back: true, forward: false });

  const back = () => {
    !!data.back && ipcRenderer.goBack(setData);
  };
  const forward = () => {
    !!data.forward && ipcRenderer.goForward(setData);
  };

  const history = useHistory();

  const jump = () => {
    history.location.pathname !== '/video' && history.push('/video');
  };

  React.useEffect(() => {
    console.log(data);
  }, [data.forward, data.back]);
  return (
    <HeaderWrapper>
      <div className="left">
        <div className="arrow-wrapper">
          <div className="left-wrapper" onClick={back}>
            <div className="arrow arrow-left"></div>
          </div>
          <div className="right-wrapper" onClick={forward}>
            <div className="arrow arrow-right"></div>
          </div>
        </div>
      </div>
      <div className="right"></div>
      <button onClick={jump}>跳转</button>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
