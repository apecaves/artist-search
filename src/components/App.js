import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import ReleasesContainer from './Releases/ReleasesContainer';
import SongsContainer from './Songs/SongsContainer';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchPage} />
      <Route path="/artist/:id" component={ReleasesContainer} />
      <Route path="/release/:id" component={SongsContainer}/>
    </Router>
  );
}