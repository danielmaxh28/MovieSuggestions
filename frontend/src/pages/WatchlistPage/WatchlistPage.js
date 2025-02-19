import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const response = await axios.get('YOUR_BACKEND_URL/api/watchlist');
      setWatchlist(response.data);
    };
    fetchWatchlist();
  }, []);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchlistPage;
