import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from '../Logo';
import styles from './_Company.module.scss';

const Company = ({ className }) => (
  <div className={classNames(className, styles.company)}>
    <Logo className={styles.company__logo} />
    <h1 className={styles.company__title}>Tezos Ukraine</h1>
    <p className={styles.company__slogan}>
      Front-end development test assignment
    </p>
  </div>
);

export default Company;

Company.propTypes = {
  className: PropTypes.string,
};

Company.defaultProps = {
  classNames: '',
};
