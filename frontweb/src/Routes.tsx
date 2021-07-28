import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';



const Routes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default Routes;