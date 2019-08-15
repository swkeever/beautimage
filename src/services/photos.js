import axios from 'axios';

const baseUrl = 'https://api.unsplash.com';
const PER_PAGE = 10;

const getAuthHeader = () => ({
  Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
});

const getPhotos = async (page = 1, perPage = PER_PAGE) => {
  const headers = getAuthHeader();
  const params = {
    page,
    per_page: perPage,
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

const searchPhotos = async (page = 1, perPage = PER_PAGE, query = '') => {
  const headers = getAuthHeader();
  const params = {
    page,
    per_page: perPage,
    query,
  };
  const url = `${baseUrl}/search/photos`;
  const result = await axios.get(url, { headers, params });

  return result.data.results;
};

const getRelated = async (id) => {
  const headers = getAuthHeader();
  const url = `${baseUrl}/collections/${id}/photos`;
  const result = await axios.get(url, { headers });

  return result.data;
};

export default {
  getPhotos,
  getPhotoById,
  searchPhotos,
  getRelated,
};
