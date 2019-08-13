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

const scrollOptions = {
  duration: 1000,
  smooth: 'easeInOutQuint',
};

export const MessageContext = React.createContext();

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // eslint-disable-next-line no-nested-ternary
  const screenWidth = window.innerWidth;
  const initialColumns = screenWidth <= Responsive.onlyMobile.maxWidth
    ? 1
    : screenWidth <= Responsive.onlyTablet.maxWidth
      ? 2
      : 3;

  const [columns, setColumns] = useState(initialColumns);
  const [nightMode, setNightMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const getMorePhotos = async (isInitialized = false, perPage = 10) => {
    setLoading(true);
    const page = isInitialized ? 1 : currentPage;
    const items = isInitialized ? [] : photos;

    try {
      const response = searchQuery
        ? await photoService.searchPhotos(page, perPage, searchQuery)
        : await photoService.getPhotos(page, perPage);
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
    setLoading(true);
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
                setLoading={setLoading}
              />
            )}
          />
          <Route
            exact
            path="/photos/:id"
            render={({ match }) => <Photo photoId={match.params.id} />}
          />
        </Router>
      </Segment>
    </MessageContext.Provider>
  );
};

export default App;
