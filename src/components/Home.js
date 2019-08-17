import React from 'react';
import {
  Container, Header, Divider, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import photoType from '../types/photo';
import Masonry from './Masonry';

const Home = ({
  nightMode,
  getMorePhotos,
  columns,
  photos,
  loading,
}) => (
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
    <Masonry
      photos={photos}
      getMorePhotos={getMorePhotos}
      nightMode={nightMode}
      loading={loading}
      columns={columns}
    />
  </Container>
);

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
