import React, { useState, useEffect } from 'react';
import './App.css';
import { animateScroll } from 'react-scroll';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Segment, Responsive,
} from 'semantic-ui-react';
import photoService from './services/photos';
import Nav from './components/Nav';
import Home from './components/Home';
import Photo from './components/Photo';
import Notification from './components/Notification';
import User from './components/User';

const scrollOptions = {
  duration: 1000,
  smooth: 'easeInOutQuint',
};

export const MessageContext = React.createContext();

const getInitialColumns = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= Responsive.onlyMobile.maxWidth) {
    return 1;
  } if (screenWidth <= Responsive.onlyTablet.maxWidth) {
    return 2;
  }
  return 3;
};

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(getInitialColumns());
  const [nightMode, setNightMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const getMorePhotos = async (
    isInitialized = false,
    perPage = 10,
    action = { type: 'photos' }) => {
    setLoading(true);
    const page = isInitialized ? 1 : currentPage;
    const items = isInitialized ? [] : photos;

    try {
      let response;

      switch (action.type) {
        case 'photos':
          response = await photoService.getPhotos(page, perPage);
          break;
        case 'search':
          response = await photoService.searchPhotos(page, perPage, action.data);
          break;
        case 'user':
          response = await photoService.getUserPhotos(page, perPage, action.data);
          break;
        default:
          throw new Error(`invalid type ${action.type}`);
      }

      setPhotos(items.concat(response));
    } catch (err) {
      setMessage({
        type: 'error',
        header: 'Error',
        content: err.message,
      });
    }

    setCurrentPage(page + 1);
    setLoading(false);
  };

  const initializePhotos = async () => {
    animateScroll.scrollToTop(scrollOptions);
    setTimeout(async () => {
      await getMorePhotos(true);
    }, scrollOptions.duration);
  };

  useEffect(() => {
    const init = async () => {
      await getMorePhotos(true);
    };
    init();
  }, []);

  return (
    <MessageContext.Provider value={[message, setMessage]}>
      <Segment inverted={nightMode}>
        <Router>
          <Notification />
          <Nav
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            nightMode={nightMode}
            setNightMode={setNightMode}
            columns={columns}
            setColumns={setColumns}
            initializePhotos={initializePhotos}
            loading={loading}
            scrollOptions={scrollOptions}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                nightMode={nightMode}
                getMorePhotos={getMorePhotos}
                columns={columns}
                photos={photos}
                loading={loading}
              />
            )}
          />
          <Route
            exact
            path="/photos/:id"
            render={({ match }) => (
              <Photo
                photoId={match.params.id}
                nightMode={nightMode}
                setSearchQuery={setSearchQuery}
                loading={loading}
                photos={photos}
                setPhotos={setPhotos}
                columns={columns}
                getMorePhotos={getMorePhotos}
                setLoading={setLoading}
                scrollOptions={scrollOptions}
              />
            )}
          />
          <Route
            exact
            path="/users/:username"
            render={({ match }) => (
              <User
                username={match.params.username}
                nightMode={nightMode}
                loading={loading}
                setLoading={setLoading}
                columns={columns}
              />
            )}
          />
        </Router>
      </Segment>
    </MessageContext.Provider>
  );
};

export default App;
