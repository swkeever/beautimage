import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import photoType from '../types/photo';

const Brick = ({ photo }) => (
  <Link  to={`/photos/${photo.id}`}>
    <Image
      srcSet={`${photo.urls.thumb} 200w, 
            ${photo.urls.small} 400w, 
            ${photo.urls.regular} 1080w`}
      src={photo.urls.thumb}
      alt={photo.alt_description}
      size="medium"
      style={{ width: '100%', paddingBottom: '0.33rem' }}
    />
  </Link>
);

Brick.propTypes = {
  photo: photoType.isRequired,
};

export default Brick;
