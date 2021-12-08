import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { HeaderComponent } from './components';

const Hello = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
