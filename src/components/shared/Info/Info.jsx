import classNames from 'classnames';
import styles from './_Info.module.scss';
import Table from '../Table';
import Company from '../Company';

const Info = () => (
  <section className={styles.info}>
    <div className={classNames('container', styles.info__container)}>
      <Company className={styles.info__company} />
      <Table />
    </div>
  </section>
);

export default Info;
