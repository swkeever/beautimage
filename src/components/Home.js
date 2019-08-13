import React from 'react';
import {
  Container, Header, Divider, Icon, Grid,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { AnimateOnChange } from 'react-animation';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import Brick from './Brick';
import photoType from '../types/photo';
import Loading from './Loading';

const Home = ({
  nightMode,
  getMorePhotos,
  columns,
  photos,
  loading,
  setLoading,
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
    <Container className="page">
      <Header
        inverted={nightMode}
        as="h1"
        textAlign="center"
        icon
      >
        <Icon name="image" />
        beautimage
        <Header.Subheader>A simple way to find beautiful images.</Header.Subheader>
      </Header>
      <Divider inverted={nightMode} />
      <InfiniteScrollWrapper photos={photos} getMorePhotos={getMorePhotos}>
        {layout}
      </InfiniteScrollWrapper>
      <Loading nightMode={nightMode} loading={loading} />
    </Container>
  );
};

const {
  bool, func, number, arrayOf,
} = PropTypes;

Home.propTypes = {
  nightMode: bool.isRequired,
  getMorePhotos: func.isRequired,
  columns: number.isRequired,
  photos: arrayOf(photoType).isRequired,
  loading: bool.isRequired,
  setLoading: func.isRequired,
};

export default Home;
