import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './shared/Header';
import '../styles/_index.scss';
// import Error404 from '../Error404.jsx';
import { LoginProvider } from './Context/LoginContext.jsx';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => (
  <LoginProvider>
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </LoginProvider>
);

export default App;
