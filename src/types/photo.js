import PropTypes from 'prop-types';

const {
  any, arrayOf, bool, number, shape, string,
} = PropTypes;

const sponsorShape = shape({
  accepted_tos: bool,
  bio: string,
  first_name: string,
  id: string,
  instagram_username: string,
  last_name: string,
  links: shape({
    followers: string,
    following: string,
    html: string,
    likes: string,
    photos: string,
    portfolio: string,
    self: string,
  }),
  location: string,
  name: string,
  portfolio_url: string,
  profile_image: shape({
    large: string,
    medium: string,
    small: string,
  }),
  total_collections: number,
  total_likes: number,
  total_photos: number,
  twitter_username: string,
  updated_at: string,
  username: string,
});

const photoType = shape({
  alt_description: string,
  categories: arrayOf(string),
  color: string,
  created_at: string,
  current_user_collections: arrayOf(any),
  description: string,
  height: number,
  id: string,
  liked_by_user: bool,
  likes: number,
  links: shape({
    download: string,
    download_location: string,
    html: string,
    self: string,
  }),
  sponsorship: shape({
    impressions_id: string,
    sponsor: sponsorShape,
    tagline: string,
  }),
  updated_at: string,
  urls: shape({
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string,
  }),
  user: sponsorShape,
  width: number,
});

export default photoType;
