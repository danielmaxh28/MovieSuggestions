import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to MovieSuggestions</h1>
    <p>Your go-to place for movie suggestions!</p>
    <Link to="/movies">View Movie Recommendations</Link>
    <br />
    <Link to="/watchlist">View Your Watchlist</Link>
  </div>
);

export default Home;
