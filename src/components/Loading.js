import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

const Loading = ({
  nightMode,
  loading,
}) => (
  <Loader inverted={nightMode} active={loading} size="big" style={{ position: 'fixed', top: '95%', left: '50%' }} />
);

Loading.propTypes = {
  nightMode: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Loading;
