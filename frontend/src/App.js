import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieRecommendations from './pages/MovieRecommendations';
import MovieDetails from './pages/MovieDetails';
import WatchlistPage from './pages/WatchlistPage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={MovieRecommendations} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/watchlist" component={WatchlistPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
