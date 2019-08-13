import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader, Dimmer } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import childrenType from '../types/children';
import photoType from '../types/photo';

const Loading = ({ loading }) => (
  <Dimmer active={loading}>
    <Loader />
  </Dimmer>
);

const InfiniteScrollWrapper = ({
  children, photos, getMorePhotos
}) => (
  <InfiniteScroll
    dataLength={photos.length} // This is important field to render the next data
    next={getMorePhotos}
    scrollableTarget="iamge-gallery"
    hasMore
    endMessage={(
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
      )}
  >
    {children}
  </InfiniteScroll>
);

InfiniteScrollWrapper.propTypes = {
  children: childrenType.isRequired,
  photos: PropTypes.arrayOf(photoType).isRequired,
  getMorePhotos: PropTypes.func.isRequired,
};

export default InfiniteScrollWrapper;
