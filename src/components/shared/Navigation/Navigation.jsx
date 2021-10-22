import { Link } from 'react-router-dom';
import styles from './_Navigation.module.scss';

const { navigation, navigationList, navigationLogin } = styles;

const Navigation = () => (
  <nav className={navigation}>
    <ul className={navigationList}>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link className={navigationLogin} to="login">
          Login
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
