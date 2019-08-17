import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
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
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
      )}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollWrapper.defaultProps = {
  hasMore: true,
};

InfiniteScrollWrapper.propTypes = {
  children: childrenType.isRequired,
  photos: PropTypes.arrayOf(photoType).isRequired,
  getMorePhotos: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
};

export default InfiniteScrollWrapper;
