import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Grid } from '@material-ui/core';

const MovieDetails = () => {
  const { id } = useParams();  // Get movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(`YOUR_BACKEND_URL/api/movies/${id}`);
      setMovie(response.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{movie.title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={movie.poster_url} alt={movie.title} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Genre: {movie.genre}</Typography>
          <Typography variant="body1" paragraph>{movie.description}</Typography>
          <Typography variant="body1">Rating: {movie.rating}</Typography>
          <Button variant="contained" color="primary">
            Add to Watchlist
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
