import styles from './_LogoCombination.module.scss';
import Logo from '../Logo';

const LogoCombination = () => (
  <a href="#" className={styles.logo__combination}>
    <Logo />
    <span>Tezos4all</span>
  </a>
);

export default LogoCombination;
