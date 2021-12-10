import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MusicHeader from './components/Header';
import { routers } from './index.data';

const DiscoverMusic: React.FC = () => {
  return (
    <Router>
      <MusicHeader />
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
        <Route
          render={() => <Redirect to="/music/discoverMusic/recommendation" />}
        />
      </Switch>
    </Router>
  );
};
export default DiscoverMusic;
