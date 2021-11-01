import classNames from 'classnames';
import LogoCombination from '../LogoCombination';
import styles from './_Header.module.scss';
import Navigation from '../Navigation';

const Header = () => (
  <header className={styles.header}>
    <div className={classNames('container', styles.header__container)}>
      <LogoCombination />
      <Navigation />
    </div>
  </header>
);

export default Header;
