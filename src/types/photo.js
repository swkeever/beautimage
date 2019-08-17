import PropTypes from 'prop-types';

const {
  any, arrayOf, bool, number, shape, string,
} = PropTypes;

const sponsorShape = shape({
  accepted_tos: bool,
  bio: string,
  first_name: string,
  id: string.isRequired,
  instagram_username: string,
  last_name: string,
  links: shape({
    followers: string.isRequired,
    following: string.isRequired,
    html: string.isRequired,
    likes: string.isRequired,
    photos: string.isRequired,
    portfolio: string.isRequired,
    self: string.isRequired,
  }).isRequired,
  location: string,
  name: string.isRequired,
  portfolio_url: string,
  profile_image: shape({
    large: string.isRequired,
    medium: string.isRequired,
    small: string.isRequired,
  }).isRequired,
  total_collections: number.isRequired,
  total_likes: number.isRequired,
  total_photos: number.isRequired,
  twitter_username: string,
  updated_at: string.isRequired,
  username: string.isRequired,
});

const photoType = shape({
  alt_description: string,
  categories: arrayOf(string).isRequired,
  color: string.isRequired,
  created_at: string.isRequired,
  current_user_collections: arrayOf(any).isRequired,
  description: string,
  height: number.isRequired,
  id: string.isRequired,
  liked_by_user: bool.isRequired,
  likes: number.isRequired,
  links: shape({
    download: string.isRequired,
    download_location: string.isRequired,
    html: string.isRequired,
    self: string.isRequired,
  }).isRequired,
  sponsorship: shape({
    impressions_id: string,
    sponsor: sponsorShape.isRequired,
    tagline: string.isRequired,
  }),
  updated_at: string.isRequired,
  urls: shape({
    full: string.isRequired,
    raw: string.isRequired,
    regular: string.isRequired,
    small: string.isRequired,
    thumb: string.isRequired,
  }).isRequired,
  user: sponsorShape.isRequired,
  width: number.isRequired,
});

export default photoType;
