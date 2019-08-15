import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import photoType from '../types/photo';
import Loading from './Loading';
import Brick from './Brick';

const Masonry = ({
  photos,
  getMorePhotos,
  nightMode,
  loading,
  columns,
  photoId,
  hasMore,
}) => {
  const getColumnOfBricks = (columnIndex) => {
    const bricks = [];
    for (let i = columnIndex; i < photos.length; i += columns) {
      const photo = photos[i];
      bricks.push(<Brick key={`img-${i}`} photo={photo} />);
    }
    return <Grid.Column key={`col-${columnIndex}`}>{bricks}</Grid.Column>;
  };

  const getBricks = () => {
    // TODO: fix loading here, should load while this function is happening.
    const result = [];
    for (let i = 0; i < columns; i += 1) {
      result.push(getColumnOfBricks(i));
    }
    return result;
  };

  const layout = (
    <Grid
      stackable
      id="image-gallery"
      centered
      columns={columns}
      padded
    >
      {getBricks()}
    </Grid>
  );

  return (
    <div>
      <InfiniteScrollWrapper hasMore={hasMore} photos={photos} getMorePhotos={getMorePhotos}>
        {layout}
      </InfiniteScrollWrapper>
      <Loading nightMode={nightMode} loading={loading} />
    </div>
  );
};

Masonry.defaultProps = {
  photoId: null,
  hasMore: true,
};

Masonry.propTypes = {
  photos: PropTypes.arrayOf(photoType).isRequired,
  getMorePhotos: PropTypes.func.isRequired,
  nightMode: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  columns: PropTypes.number.isRequired,
  photoId: PropTypes.string,
  hasMore: PropTypes.bool,
};

export default Masonry;
