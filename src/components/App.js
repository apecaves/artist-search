import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route path="/" component={SearchPage} />
    </Router>
  );
}
