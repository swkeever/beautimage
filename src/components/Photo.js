import React, { useState, useEffect, useContext } from 'react';
import {
  Container, Loader, Image, Icon, Header, Grid, Menu, Button, Label, Responsive,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { animateScroll } from 'react-scroll';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import photoService from '../services/photos';
// eslint-disable-next-line import/no-cycle
import { MessageContext } from '../App';
import photoType from '../types/photo';
import Masonry from './Masonry';
import scrollOptionsType from '../types/scrollOptions';

const Photo = ({
  photoId,
  nightMode,
  setSearchQuery,
  loading,
  photos,
  columns,
  getMorePhotos,
  setLoading,
  scrollOptions,
  history,
}) => {
  const [photo, setPhoto] = useState(null);
  const [, setMessage] = useContext(MessageContext);
  const [tags, setTags] = useState('');

  useEffect(() => {
    const fetchPhoto = async () => {
      let result = null;
      setLoading(true);

      animateScroll.scrollToTop(scrollOptions);

      try {
        result = await photoService.getPhotoById(photoId);
        const selectedTags = result.tags
          .slice(0, Math.min(3, result.tags.length))
          .map(tag => tag.title)
          .filter(tag => tag.length > 3)
          .join(' ');
        setTags(selectedTags);
        await getMorePhotos(true, 10, { type: 'search', data: selectedTags });
      } catch (err) {
        setMessage({
          type: 'error',
          header: 'Error',
          content: err.message,
        });
        setSearchQuery('');
      }

      setPhoto(result);
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

    return _.startCase(title);
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
        </a>
      </Menu.Item>
    );
  };

  const goToUserPage = () => {
    animateScroll.scrollToTop(scrollOptions);
    history.push(`/users/${photo.user.username}`);
  };

  return (
    <Container className="page">
      <Header inverted={nightMode} as="h2">
        {getTitle()}
        <Header.Subheader>{`Photo by ${photo.user.first_name} ${photo.user.last_name}`}</Header.Subheader>

      </Header>
      <Grid>
        <Grid.Column columns={1}>
          <Image
            bordered
            src={photo.urls.thumb}
            srcSet={`${photo.urls.thumb} 200w, 
                      ${photo.urls.small} 400w, 
                      ${photo.urls.regular} 1080w`}
          />
        </Grid.Column>
      </Grid>
      <Menu borderless inverted={nightMode}>
        <Menu.Item header link onClick={goToUserPage}>
          <Image style={{ paddingRight: '3px' }} avatar src={photo.user.profile_image.small} />
          {`${photo.user.first_name} ${photo.user.last_name}`}
        </Menu.Item>
        {socialMedia('instagram')}
        {socialMedia('twitter')}
        <Menu.Item position="right" link>
          <a href={photo.links.download} download>
            <Icon
              name="download"
            />
          </a>

        </Menu.Item>
        <Menu.Item>
          <Button as="div" labelPosition="right">
            <Button color="red">
              <Icon name="heart" />
              <Responsive style={{ display: 'inline' }} minWidth={Responsive.onlyTablet.minWidth}>
                Likes
              </Responsive>
            </Button>
            <Label as="a" basic color="red" pointing="left">
              {photo.likes}
            </Label>
          </Button>
        </Menu.Item>
      </Menu>
      <Header as="h2">Related</Header>
      <Masonry
        photos={filteredPhotos}
        getMorePhotos={() => getMorePhotos(false, 10, { type: 'search', data: tags })}
        nightMode={nightMode}
        loading={loading}
        columns={columns}
        photoId={photoId}
      />
    </Container>
  );
};

Photo.propTypes = {
  photoId: PropTypes.string.isRequired,
  nightMode: PropTypes.bool.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  photos: PropTypes.arrayOf(photoType).isRequired,
  columns: PropTypes.number.isRequired,
  getMorePhotos: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  scrollOptions: scrollOptionsType.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Photo);
