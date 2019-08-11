import PropTypes from 'prop-types';

const messageType = PropTypes.shape({
  type: PropTypes.oneOf([
    'negative',
    'positive',
    'success',
    'warning',
    'info',
    'error',
  ]).isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

export default messageType;
