import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import childrenType from '../types/children';
import photoType from '../types/photo';

const InfiniteScrollWrapper = ({
  children, photos, getMorePhotos, hasMore,
}) => (
  <InfiniteScroll
    dataLength={photos.length} // This is important field to render the next data
    next={getMorePhotos}
    scrollableTarget="iamge-gallery"
    hasMore={hasMore}
    endMessage={(
      <Header textAlign="center">
        You have seen it all!
        {' '}
        <span role="img" aria-label="smiley">😄</span>
        <Header.Subheader>
          Go
          {' '}
          <Link to="/">home</Link>
          ?
        </Header.Subheader>
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
};

export default InfiniteScrollWrapper;
