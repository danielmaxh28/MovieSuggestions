import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, Button } from '@material-ui/core';

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await axios.get('YOUR_BACKEND_URL/api/watchlist');
      setWatchlist(response.data);
    };
    fetchWatchlist();
  }, []);

  const handleRemoveFromWatchlist = async (movieId) => {
    await axios.delete(`YOUR_BACKEND_URL/api/watchlist/${movieId}`);
    setWatchlist(watchlist.filter((movie) => movie.id !== movieId));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Watchlist</Typography>
      <List>
        {watchlist.map((movie) => (
          <ListItem key={movie.id}>
            <Typography variant="body1">{movie.title}</Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => handleRemoveFromWatchlist(movie.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WatchlistPage;
