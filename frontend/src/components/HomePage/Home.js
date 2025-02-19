import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to NovieSuggestions
      </Typography>
      <Typography variant="body1" paragraph>
        Discover new movies based on your preferences, create your own watchlist, and never miss out on movies to watch!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/movies">
        View Movie Recommendations
      </Button>
      <br />
      <Button variant="contained" color="secondary" component={Link} to="/watchlist">
        View Your Watchlist
      </Button>
    </Container>
  );
};

export default Home;
