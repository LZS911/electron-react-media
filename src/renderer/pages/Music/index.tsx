import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { LayoutComponent } from '../../components';
import { IMenuDataItem } from '../../router/index.d';
import MusicSider from './components/Sider';

const routers: IMenuDataItem[] = [
  {
    path: '/music/discoverMusic',
    name: 'discoverMusic',
    component: React.lazy(() => import('./components/DiscoverMusic')),
  },
  {
    path: '/music/privateFM',
    name: 'privateFM',
    component: React.lazy(() => import('./components/PrivateFM')),
  },
];

const MusicComponent: React.FC = () => {
  return (
    <>
      <Router>
        <LayoutComponent
          Sider={MusicSider}
          Content={() => (
            <Switch>
              {routers.map((menu) => {
                if (menu.component) {
                  return (
                    <Route
                      exact
                      path={menu.path}
                      key={menu.name}
                      component={menu.component}
                    />
                  );
                }
                return null;
              })}
              <Route render={() => <Redirect to="/music/discoverMusic" />} />
            </Switch>
          )}
        />
      </Router>
    </>
  );
};

export default MusicComponent;
