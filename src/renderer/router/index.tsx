import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Container from '../pages/Container';
import routers from './router.config';

export default function RouterComponent() {
  return (
    <>
      <Router>
        <Container>
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
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Suspense>
        </Container>
      </Router>
    </>
  );
}
