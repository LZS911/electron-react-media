import React from 'react';
import { HeaderWrapper } from './style';
import { classnames } from '../../utils';

const { ipcRenderer } = window.electronAPI;

const HeaderComponent: React.FC = () => {
  const [isSwitchRouter, setIsSwitchRouter] = React.useState({
    back: false,
    forward: false,
  });
  const back = () => {
    ipcRenderer.goBack(setIsSwitchRouter);
  };
  const forward = () => {
    ipcRenderer.goForward(setIsSwitchRouter);
  };

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="arrow-content">
          <div
            className={classnames(
              ['arrow-wrapper', 'left-wrapper', 'disabled-wrapper'],
              [true, true, !isSwitchRouter.back]
            )}
            onClick={back}
          >
            <div
              className={classnames(
                ['arrow', 'arrow-left', 'disabled-arrow'],
                [true, true, !isSwitchRouter.back]
              )}
            />
          </div>
          <div
            className={classnames(
              ['arrow-wrapper', 'right-wrapper', 'disabled-wrapper'],
              [true, true, !isSwitchRouter.forward]
            )}
            onClick={forward}
          >
            <div
              className={classnames(
                ['arrow', 'arrow-right', 'disabled-arrow'],
                [true, true, !isSwitchRouter.forward]
              )}
            />
          </div>
        </div>
      </div>
      <div className="right" />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
