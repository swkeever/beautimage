import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Nav from './components/Nav';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={App} />
    </Router>
  )
}

export default AppRouter;