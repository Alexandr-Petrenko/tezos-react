import classNames from 'classnames';
import LogoCombination from '../shared/LogoCombination';
import styles from './_Header.module.scss';
import Navigation from '../shared/Navigation';

const { header, headerContainer } = styles;

const Header = () => (
  <header className={header}>
    <div className={classNames('container', headerContainer)}>
      <LogoCombination />
      <Navigation />
    </div>
  </header>
);

export default Header;
