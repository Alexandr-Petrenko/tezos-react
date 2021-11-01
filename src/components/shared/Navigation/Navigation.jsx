import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './_Navigation.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const visible = isOpen ? styles['navigation__list--is-open'] : '';

  return (
    <nav className={styles.navigation}>
      <ul className={classNames(styles.navigation__list, visible)}>
        <li className={styles.navigation__link}>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link className={styles.navigation__login} to="login">
            Login
          </Link>
        </li>
      </ul>
      <div
        className={styles.navigation__burger}
        onClick={() => setIsOpen(!isOpen)}
      />
    </nav>
  );
};

export default Navigation;
