import React from 'react';
import { useLocation } from 'react-router';
import { HeaderWrapper } from './style';
import { classnames } from '../../utils';
import { TabsComponent } from '..';
import { ITabsList } from '../Tabs/index.d';

const { ipcRenderer } = window.electronAPI;
const list: ITabsList[] = [
  { path: '/recommendation', label: '个性推荐' },
  { path: '/songList', label: '歌单' },
];

const HeaderComponent: React.FC = () => {
  const [isSwitchRouter, setIsSwitchRouter] = React.useState({
    back: false,
    forward: false,
  });

  const location = useLocation();
  React.useEffect(() => {
    ipcRenderer.canGoBackOrForward(setIsSwitchRouter);
  }, [location]);

  const back = () => {
    isSwitchRouter.back && ipcRenderer.goBack();
  };
  const forward = () => {
    isSwitchRouter.forward && ipcRenderer.goForward();
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
      <div className="right">
        <TabsComponent list={list} />
      </div>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
