import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_Logo.module.scss';
import img from '../../../images/logo.svg';

const Logo = ({ className }) => (
  <img src={img} alt="Tezos" className={classNames(styles.logo, className)} />
);

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};
