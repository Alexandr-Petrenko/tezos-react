import PropTypes from 'prop-types';

const Text = ({ content, className }) => <p className={className}>{content}</p>;

export default Text;

Text.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
