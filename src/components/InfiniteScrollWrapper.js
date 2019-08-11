import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import childrenType from '../types/children';
import photoType from '../types/photo';

const InfiniteScrollWrapper = ({ children, photos, getMorePhotos }) => (
  <InfiniteScroll
    dataLength={photos.length} // This is important field to render the next data
    next={getMorePhotos}
    scrollableTarget="iamge-gallery"
    hasMore
    loader={<Loader />}
    endMessage={(
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
      )}
      // below props only if you need pull down functionality
    pullDownToRefreshContent={
      <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
    releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollWrapper.propTypes = {
  children: childrenType.isRequired,
  photos: photoType.isRequired,
  getMorePhotos: PropTypes.func.isRequired,
};

export default InfiniteScrollWrapper;
