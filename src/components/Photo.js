import React, { useState, useEffect, useContext } from 'react';
import {
  Container, Loader, Image, Icon, Header, Grid, List,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import photoService from '../services/photos';
// eslint-disable-next-line import/no-cycle
import { MessageContext } from '../App';

const Photo = ({ photoId }) => {
  const [photo, setPhoto] = useState(null);
  const [, setMessage] = useContext(MessageContext);

  useEffect(() => {
    const fetchPhoto = async () => {
      let result = null;

      try {
        result = await photoService.getPhotoById(photoId);
      } catch (err) {
        setMessage({
          type: 'error',
          header: 'Error',
          content: err.message,
        });
      }

      setPhoto(result);
    };
    fetchPhoto();
  }, []);

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

  return (
    <Container className="page">
      <Header as="h1">{getTitle()}</Header>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image centered size="big" src={photo.urls.regular} />
          </Grid.Column>
          <Grid.Column>
            <Image avatar src={photo.user.profile_image.small} />
            <List>
              <List.Item>
                <Icon name="user" />
                {`${photo.user.first_name} ${photo.user.last_name}`}
              </List.Item>
              <List.Item>
                <Icon name="photo" />
                {photo.user.username}
              </List.Item>
              <List.Item>
                <Icon name="instagram" />
                {photo.user.instagram_username}
              </List.Item>
              <List.Item>
                <Icon name="twitter" />
                {photo.user.twitter_username}
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <a href={photo.links.download} download>
        <Icon size="big" name="download" link />
      </a>
    </Container>
  );
};

Photo.propTypes = {
  photoId: PropTypes.string.isRequired,
};

export default Photo;
