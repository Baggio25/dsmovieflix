import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';
import history from './util/history';



const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/movies" exact>
          <Catalog />
        </Route>
        <Route path="/movies/:movieId" >
          <MovieDetails />
        </Route>
       
      </Switch>
    </Router>
  );
}

export default Routes;