import React, { useState, useEffect, useContext } from 'react';
import {
  Container, Header, Divider, Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import photoType from '../types/photo';
import Masonry from './Masonry';
import photoService from '../services/photos';
import { MessageContext } from '../App';
import photoReducer from '../reducers/photoReducer';

const Home = ({
  nightMode,
  columns,
  searchQuery,
}) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [, setMessage] = useContext(MessageContext);

  useEffect(() => {
    photoReducer({
      isInit: true,
      actionType: searchQuery ? 'search' : 'photos',
      actionData: searchQuery || null,
      photos,
      currentPage,
      setCurrentPage,
      setPhotos,
      setLoading,
      setMessage,
      setHasMore,
    });
  }, [searchQuery]);

  if (!photos.length) {
    return null;
  }

  const getMorePhotos = () => photoReducer({
    isInit: false,
    actionType: searchQuery ? 'search' : 'photos',
    actionData: searchQuery || null,
    photos,
    currentPage,
    setCurrentPage,
    setPhotos,
    setLoading,
    setMessage,
    setHasMore,
  });

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
      <Masonry
        hasMore={hasMore}
        photos={photos}
        getMorePhotos={getMorePhotos}
        nightMode={nightMode}
        loading={loading}
        columns={columns}
      />
    </Container>
  );
};

Home.propTypes = {
  nightMode: PropTypes.bool.isRequired,
  columns: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Home;
