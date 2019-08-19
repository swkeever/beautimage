import React, { useState } from 'react';
import './App.css';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import {
  Segment, Responsive,
} from 'semantic-ui-react';
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
  const [columns, setColumns] = useState(getInitialColumns());
  const [nightMode, setNightMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState(null);

  return (
    <MessageContext.Provider value={[message, setMessage]}>
      <Segment inverted={nightMode}>
        <HashRouter>
          <Notification />
          <Nav
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            nightMode={nightMode}
            setNightMode={setNightMode}
            columns={columns}
            setColumns={setColumns}
            scrollOptions={scrollOptions}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                nightMode={nightMode}
                columns={columns}
                searchQuery={searchQuery}
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
                columns={columns}
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
                columns={columns}
              />
            )}
          />
        </HashRouter>
      </Segment>
    </MessageContext.Provider>
  );
};

export default App;
