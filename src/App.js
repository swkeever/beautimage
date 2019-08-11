import React, { useState, useEffect } from 'react';
import './App.css';
import { animateScroll } from 'react-scroll';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {
  Segment,
} from 'semantic-ui-react';
import photoService from './services/photos';
import Nav from './components/Nav';
import Home from './components/Home';
import Photo from './components/Photo';

const scrollOptions = {
  duration: 500,
  smooth: true,
};

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(3);
  const [nightMode, setNightMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getMorePhotos = async (isInitialized = false) => {
    setLoading(true);
    const page = isInitialized ? 1 : currentPage;
    const items = isInitialized ? [] : photos;

    const response = searchQuery
      ? await photoService.searchPhotos(page, searchQuery)
      : await photoService.getPhotos(page);

    setCurrentPage(page + 1);
    setPhotos(items.concat(response));
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
      await getMorePhotos();
    };
    init();
  }, []);

  return (
    <Segment inverted={nightMode}>
      <Router>
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
          render={({ match }) => <Photo photoId={match.params.id} />}
        />
      </Router>

    </Segment>


  );
};

export default App;
