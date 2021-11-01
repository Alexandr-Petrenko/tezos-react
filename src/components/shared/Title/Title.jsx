import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_Title.module.scss';

const Title = ({ content, className }) => (
  <h2 className={classNames(styles.title, className)}>{content}</h2>
);

export default Title;

Title.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};
