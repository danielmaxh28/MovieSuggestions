import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={movie.title}
        height="140"
        image={movie.poster_url}
        title={movie.title}
      />
      <CardContent>
        <Typography variant="h5">{movie.title}</Typography>
        <Typography variant="body2">{movie.genre}</Typography>
        <Button variant="contained" color="primary">
          Add to Watchlist
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
