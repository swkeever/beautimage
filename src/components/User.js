import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Image, Loader, List, Icon,
} from 'semantic-ui-react';
import Masonry from './Masonry';
import { MessageContext } from '../App';
import photoReducer from '../reducers/photoReducer';

const User = ({
  username,
  nightMode,
  columns,
}) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setMessage] = useContext(MessageContext);

  useEffect(() => {
    photoReducer({
      isInit: true,
      actionType: 'user',
      actionData: username,
      photos,
      setPhotos,
      currentPage,
      setCurrentPage,
      setLoading,
      setMessage,
      setHasMore,
    });
  }, [username]);

  const getMorePhotos = () => photoReducer({
    isInit: false,
    actionType: 'user',
    actionData: username,
    photos,
    setPhotos,
    currentPage,
    setCurrentPage,
    setLoading,
    setMessage,
    setHasMore,
  });

  const getSocialMediaLink = (socialInfo) => {
    const { url, iconName, isAvailable } = socialInfo;

    if (!isAvailable) {
      return null;
    }

    return (
      <List.Item>
        <a href={url}>
          <Icon
            name={iconName}
            link
            size="large"
          />
        </a>
      </List.Item>
    );
  };

  if (!photos.length) {
    return <Loader />;
  }

  const { user } = photos[0];

  return (
    <Container className="page">
      <Header inverted={nightMode} textAlign="center" as="h1">
        <Image
          style={{ marginRight: '0.5rem' }}
          centered
          circular
          src={user.profile_image.large}
        />
        {user.first_name.toLowerCase()}
        &nbsp;
        <span className="primary">
          {user.last_name ? user.last_name.toLowerCase() : ''}
        </span>
      </Header>
      <Container style={{margin: '1.5rem 0'}} textAlign="center">
        <List inverted={nightMode} horizontal>
          {getSocialMediaLink({
            isAvailable: !!user.portfolio_url,
            iconName: 'briefcase',
            url: user.portfolio_url,
          })}
          {getSocialMediaLink({
            isAvailable: !!user.instagram_username,
            iconName: 'instagram',
            url: `https://www.instagram.com/${user.instagram_username}`,
          })}
          {getSocialMediaLink({
            isAvailable: !!user.twitter_username,
            iconName: 'twitter',
            url: `https://www.twitter.com/${user.twitter_username}`,
          })}
        </List>
      </Container>
      <Masonry
        photos={photos}
        getMorePhotos={getMorePhotos}
        nightMode={nightMode}
        loading={loading}
        columns={columns}
        hasMore={hasMore}
      />
    </Container>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  nightMode: PropTypes.bool.isRequired,
  columns: PropTypes.number.isRequired,
};

export default User;
