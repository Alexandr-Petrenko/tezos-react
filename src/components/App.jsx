import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import '../styles/_index.scss';
// import Error404 from '../Error404.jsx';
import { LoginProvider } from './Providers/LoginProvider.jsx';
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
