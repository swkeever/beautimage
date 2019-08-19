import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import childrenType from '../types/children';
import photoType from '../types/photo';

const InfiniteScrollWrapper = ({
  children, photos, getMorePhotos, hasMore, nightMode, history,
}) => (
  <InfiniteScroll
    dataLength={photos.length} // This is important field to render the next data
    next={getMorePhotos}
    scrollableTarget="iamge-gallery"
    hasMore={hasMore}
    endMessage={(
      <Header inverted={nightMode} textAlign="center">
        You have seen it all!
        {' '}
        <span role="img" aria-label="smiley">😄</span>
        {history.location.pathname === '/' ? null : (
          <Header.Subheader>
          Go
            {' '}
            <Link to="/">home</Link>
          ?
          </Header.Subheader>
        )}
      </Header>
      )}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollWrapper.propTypes = {
  children: childrenType.isRequired,
  photos: PropTypes.arrayOf(photoType).isRequired,
  getMorePhotos: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  nightMode: PropTypes.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(InfiniteScrollWrapper);
