import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/Catalog/MovieDetails';
import history from './util/history';

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Navbar />
			<Switch>
				<Redirect from="/" to="/auth/login" exact />
				<Route path="/auth">
					<Auth />
				</Route>
				<Route path="/movies" exact>
					<Catalog />
				</Route>
				<Route path="/movies/:movieId">
					<MovieDetails />
				</Route>
			</Switch>
		</Switch>
	</Router>
);

export default Routes;
