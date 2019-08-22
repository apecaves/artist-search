import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReleasesContainer from './Releases/ReleasesContainer';
import SongsContainer from './Songs/SongsContainer';
import LyricContainer from './Lyrics/LyricContainer';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/artist/:id" component={ReleasesContainer} />
      <Route path="/release/:id" component={SongsContainer} />
      <Route path="/song/:title" component={LyricContainer} />
    </Router>
  );
}
