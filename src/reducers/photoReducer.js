import _ from 'lodash';
import photoService, { PER_PAGE } from '../services/photos';

const photoReducer = async (options) => {
  const {
    isInit,
    actionType,
    actionData,
    photos,
    currentPage,
    setCurrentPage,
    setPhotos,
    setLoading,
    setMessage,
    setHasMore,
  } = options;

  setLoading(true);
  const page = isInit ? 1 : currentPage;
  const items = isInit ? [] : photos;

  try {
    let response;

    switch (actionType) {
      case 'photos':
        response = await photoService.getPhotos(page);
        break;
      case 'search':
        response = await photoService.searchPhotos(page, actionData);
        break;
      case 'user':
        response = await photoService.getUserPhotos(page, actionData);
        break;
      default:
        throw new Error(`invalid type ${actionType}`);
    }

    setHasMore(response.length === PER_PAGE);
    setPhotos(items.concat(response));
    setCurrentPage(page + 1);
  } catch (err) {
    setMessage({
      type: 'error',
      header: 'Error',
      content: err.message,
    });
    setHasMore(false);
  }

  setLoading(false);
};

export default photoReducer;
