import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import photoType from '../types/photo';

const Brick = ({ photo }) => (
  <Link to={`/photos/${photo.id}`}>
    <Image
      srcSet={`${photo.urls.thumb} 600w, 
            ${photo.urls.small} 1000w, 
            ${photo.urls.regular} 1500w`}
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
