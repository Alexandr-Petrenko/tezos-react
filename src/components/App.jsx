import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './shared/Header';
import '../styles/_index.scss';
import { LoginProvider } from './Context/LoginContext.jsx';
import Login from './pages/Login';
import Home from './pages/Home';
import Error404 from './Error404.jsx';

const App = () => (
  <LoginProvider>
    <Router>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={Error404} />
      </Switch>
    </Router>
  </LoginProvider>
);

export default App;
