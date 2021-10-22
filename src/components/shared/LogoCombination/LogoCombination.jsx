import styles from './_LogoCombination.module.scss';
import Logo from '../Logo';

const { logoCombination } = styles;

const LogoCombination = () => (
  <a href="#" className={logoCombination}>
    <Logo />
    <span>Tezos4all</span>
  </a>
);

export default LogoCombination;
