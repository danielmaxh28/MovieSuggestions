import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Card, CardMedia, CardContent, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MovieRecommendations = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        //  TMDb API call
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_TMDB_API_KEY`);
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Movie Recommendations
      </Typography>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                alt={movie.title}
                height="250"
                image={movie.poster_url || 'https://via.placeholder.com/150'}
                title={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {movie.description.slice(0, 100)}...
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/movies/${movie.id}`}
                  style={{ marginTop: '10px' }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieRecommendations;
