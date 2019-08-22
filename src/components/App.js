import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import ReleasesContainer from './Releases/ReleasesContainer';

export default function App() {
  return (
    <Router>
      <Route path="/" component={SearchPage} />
      <Route path="/:artist/:id" component={ReleasesContainer} />
    </Router>
  );
}
