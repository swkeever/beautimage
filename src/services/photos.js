import axios from 'axios';

const baseUrl = 'https://api.unsplash.com';
export const PER_PAGE = 12;

const getAuthHeader = () => ({
  Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
});

const getPhotos = async (page) => {
  const headers = getAuthHeader();
  const params = {
    page,
    per_page: PER_PAGE,
  };
  const url = `${baseUrl}/photos`;
  const result = await axios.get(url, { headers, params });

  return result.data;
};

const getPhotoById = async (id) => {
  const headers = getAuthHeader();
  const url = `${baseUrl}/photos/${id}`;
  const result = await axios.get(url, { headers });
  return result.data;
};

const searchPhotos = async (page, query) => {
  const headers = getAuthHeader();
  const params = {
    page,
    per_page: PER_PAGE,
    query,
  };
  const url = `${baseUrl}/search/photos`;
  const result = await axios.get(url, { headers, params });

  return result.data.results;
};

const getUserPhotos = async (page, username) => {
  const headers = getAuthHeader();
  const params = {
    page,
    per_page: PER_PAGE,
  };
  const url = `${baseUrl}/users/${username}/photos`;
  const result = await axios.get(url, { headers, params });

  return result.data;
};

export default {
  getPhotos,
  getPhotoById,
  searchPhotos,
  getUserPhotos,
};
