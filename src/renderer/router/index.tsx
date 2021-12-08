import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routers from './router.config';

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Suspense fallback={null}>
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
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
