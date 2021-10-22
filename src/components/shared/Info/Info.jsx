import styles from './_Info.module.scss';
import Table from '../Table';

const { info } = styles;

const Info = () => (
  <section className={info}>
    <Table />
  </section>
);

export default Info;
