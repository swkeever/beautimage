import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Header, Divider, Icon, Image, Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InfiniteScrollWrapper from './InfiniteScrollWrapper';
import Brick from './Brick';
import photoType from '../types/photo';

const Home = ({
  nightMode,
  getMorePhotos,
  columns,
  photos,
  loading,
}) => {
  const getNextBricks = (startIndex) => {
    const endIndex = Math.min(startIndex + columns, photos.length - 1);
    const nextPhotos = photos.slice(startIndex, endIndex);
    return nextPhotos.map(photo => <Brick photo={photo} />);
  };

  const getColumnOfBricks = (columnIndex) => {
    const filteredPhotos = photos.filter((photo, index) => index % columns === columnIndex);
    const bricks = filteredPhotos.map(photo => <Brick key={photo.id} photo={photo} />);
    return <Grid.Column>{bricks}</Grid.Column>;
  };

  console.log(photos);

  const getBricks = () => {
    const result = [];
    for (let i = 0; i < columns; i += 1) {
      result.push(getColumnOfBricks(i));
    }
    return result;
  };

  const bricks = (
    <Grid
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
      <Header inverted={nightMode} as="h1" textAlign="center" icon>
        <Icon name="image" />
        ImageExplorer
      </Header>
      <Divider inverted={nightMode} />
      <InfiniteScrollWrapper photos={photos} getMorePhotos={getMorePhotos}>
        {bricks}
      </InfiniteScrollWrapper>
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
};

export default Home;
