import React, { useState, useEffect } from 'react';
import {
  Container, Loader, Image, Icon, Header, Grid, List,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import photoService from '../services/photos';

const Photo = ({ photoId, history }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const result = await photoService.getPhotoById(photoId);
      setPhoto(result);
    };
    fetchPhoto();
  }, [photoId]);

  if (!photo) {
    return <Loader />;
  }

  // useful for search more photo like this.
  const tags = photo.tags.map(tag => tag.title);

  console.log(photo);

  console.log(photo.links.download_location);

  const getTitle = (photo) => {
    let { title } = photo.story;

    if (!title) {
      title = photo.alt_description;

      console.log(title)

      if (!title) {
        title = `Photo ${photo.id}`;
      }
    }

    return title.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  };

  return (
    <Container className="page">
      <Header as="h1">{getTitle(photo)}</Header>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image centered size="big" src={photo.urls.regular} />
          </Grid.Column>
          <Grid.Column>
            <Image avatar src={photo.user.profile_image.small} />
            <List vertical>
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

export default withRouter(Photo);
