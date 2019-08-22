import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReleasesContainer from './Releases/ReleasesContainer';
import SongsContainer from './Songs/SongsContainer';
import LyricsContainer from './Lyrics/LyricsContainer';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/artist/:artistName/:id" component={ReleasesContainer} />
      <Route path="/release/:artistName/:id" component={SongsContainer} />
      <Route path="/song/:artistName/:title" component={LyricsContainer} />
    </Router>
  );
}
