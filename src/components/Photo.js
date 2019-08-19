import React, { useState, useEffect, useContext } from 'react';
import {
  Container, Loader, Image, Icon, Header, Grid, Menu, Button, Label, Responsive, Sidebar, Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { animateScroll } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import photoService from '../services/photos';
// eslint-disable-next-line import/no-cycle
import { MessageContext } from '../App';
import Masonry from './Masonry';
import scrollOptionsType from '../types/scrollOptions';
import photoReducer from '../reducers/photoReducer';

const Photo = ({
  photoId,
  nightMode,
  columns,
  scrollOptions,
  history,
}) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [, setMessage] = useContext(MessageContext);
  const [tags, setTags] = useState('');

  useEffect(() => {
    const fetchPhoto = async () => {
      let result;
      setLoading(true);

      animateScroll.scrollToTop(scrollOptions);

      try {
        result = await photoService.getPhotoById(photoId);
        const selectedTags = result.tags
          .slice(0, Math.min(5, result.tags.length))
          .map(tag => tag.title)
          .filter(tag => tag.length > 3)
          .join(' ');
        setTags(selectedTags);
        setPhoto(result);
        photoReducer({
          isInit: true,
          actionType: 'search',
          actionData: selectedTags,
          photos,
          currentPage,
          setPhotos,
          setCurrentPage,
          setLoading,
          setMessage,
          setHasMore,
        });
      } catch (err) {
        setMessage({
          type: 'error',
          header: 'Error',
          content: err.message,
        });
      }

      setLoading(false);
    };
    fetchPhoto();
  }, [photoId]);

  const getTitle = () => {
    let { title } = photo.story;

    if (!title) {
      title = photo.alt_description;

      if (!title) {
        title = `Photo ${photo.id}`;
      }
    }

    return title.toLowerCase();
  };

  if (!photo) {
    return <Loader />;
  }

  const filteredPhotos = photos.filter(p => p.id !== photoId);

  const socialMedia = (type) => {
    const handle = _.get(photo, `user.${type}_username`);

    if (!handle) {
      return null;
    }

    return (
      <Menu.Item link>
        <a href={`https://www.${type}.com/${handle}`}>
          <Icon name={type} />
          {type}
        </a>
      </Menu.Item>
    );
  };

  const goToUserPage = () => {
    animateScroll.scrollToTop(scrollOptions);
    history.push(`/users/${photo.user.username}`);
  };

  const getMorePhotos = () => photoReducer({
    isInit: false,
    actionType: 'search',
    actionData: tags,
    photos,
    currentPage,
    setPhotos,
    setCurrentPage,
    setLoading,
    setMessage,
    setHasMore,
  });

  const photoStyle = photo.width > photo.height 
  ? {width: '100vw', height: 'auto'}
  : {height: '100vh', width: 'auto'};

  return (
    <Container className="page">
      <Container>
        <Header
          textAlign="center"
          inverted={nightMode}
          as="h2"
        >
          {getTitle()}
        </Header>
        <Image
          style={photoStyle}
          centered
          bordered
          src={photo.urls.thumb}
          srcSet={`${photo.urls.thumb} 200w, 
                      ${photo.urls.small} 400w, 
                      ${photo.urls.regular} 1080w`}
        />
      </Container>

      <Menu
        inverted={nightMode}
        style={{ marginTop: '1.5rem' }}
        borderless
        stackable
      >
        <Menu.Item header link onClick={goToUserPage}>
          <Image style={{ paddingRight: '3px' }} avatar src={photo.user.profile_image.small} />
          {photo.user.first_name.toLowerCase()}
              &nbsp;
          <span className="primary">
            {photo.user.last_name ? photo.user.last_name.toLowerCase() : ''}
          </span>
        </Menu.Item>
        {socialMedia('instagram')}
        {socialMedia('twitter')}
        <Menu.Item position="right" link>
          <a href={photo.links.download} download>
            <Icon
              name="download"
            />
            download
          </a>
        </Menu.Item>
      </Menu>

      <Header inverted={nightMode} as="h2">
related
        {' '}
        <span className="primary">images</span>
      </Header>
      <Masonry
        photos={filteredPhotos}
        getMorePhotos={getMorePhotos}
        nightMode={nightMode}
        loading={loading}
        columns={columns}
        photoId={photoId}
        hasMore={hasMore}
      />
    </Container>
  );
};

Photo.propTypes = {
  photoId: PropTypes.string.isRequired,
  nightMode: PropTypes.bool.isRequired,
  columns: PropTypes.number.isRequired,
  scrollOptions: scrollOptionsType.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Photo);
