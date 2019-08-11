import PropTypes from 'prop-types';

const scrollOptionsType = PropTypes.shape({
  duration: PropTypes.number.isRequired,
  smooth: PropTypes.string.isRequired,
});

export default scrollOptionsType;
