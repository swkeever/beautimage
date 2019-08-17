import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Image, Loader, List, Icon,
} from 'semantic-ui-react';
import photoService from '../services/photos';
import Masonry from './Masonry';
import { MessageContext } from '../App';

const User = ({
  username,
  nightMode,
  loading,
  columns,
}) => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setMessage] = useContext(MessageContext);

  const getMorePhotos = async (isInit = false) => {
    const page = isInit ? 1 : currentPage;
    try {
      const response = await photoService.getUserPhotos(page, 10, username);
      setPhotos(photos.concat(response));
      setCurrentPage(page + 1);
    } catch (err) {
      setMessage({
        type: 'error',
        header: 'Error',
        content: err.message,
      });
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      await getMorePhotos(true);
    };
    fetchPhotos();
  }, []);

  const getSocialMediaLink = (socialInfo) => {
    const { url, iconName, isAvailable } = socialInfo;
    if (!isAvailable) {
      return null;
    }
    return (
      <List.Item>
        <Icon
          name={iconName}
          link={url}
        />
      </List.Item>
    );
  };

  if (!photos.length) {
    return <Loader />;
  }

  const { user } = photos[0];

  return (
    <Container className="page">
      <Header textAlign="center" as="h1">
        <Image
          style={{ padding: '2px' }}
          centered
          circular
          src={user.profile_image.large}
        />
        {`${user.first_name} ${user.last_name}`}
      </Header>

      <Container textAlign="center">
        <List horizontal>
          {getSocialMediaLink({
            isAvailable: !!user.portfolio_url,
            iconName: 'briefcase',
            url: user.portfolio_url,
          })}
          {getSocialMediaLink({
            isAvailable: !!user.instagram_username,
            iconName: 'instagram',
            url: user.instagram_username,
          })}
          {getSocialMediaLink({
            isAvailable: !!user.twitter_username,
            iconName: 'twitter',
            url: user.twitter_username,
          })}
        </List>
      </Container>


      <Masonry
        photos={photos}
        getMorePhotos={getMorePhotos}
        nightMode={nightMode}
        loading={loading}
        columns={columns}
      />
    </Container>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  nightMode: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  columns: PropTypes.number.isRequired,
};

export default User;
