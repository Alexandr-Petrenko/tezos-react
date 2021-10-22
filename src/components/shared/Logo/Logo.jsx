import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_Logo.module.scss';
import img from '../../../images/logo.svg';

const { logo } = styles;

const Logo = (className) => (
  <img src={img} alt="Tezos" className={classNames(logo, className)} />
);

export default Logo;

Logo.propTypes = {
  classNames: PropTypes.string,
};

Logo.defaultProps = {
  classNames: '',
};
