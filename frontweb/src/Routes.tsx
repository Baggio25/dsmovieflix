import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import history from './util/history';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';


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