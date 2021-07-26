import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/Catalog/MovieDetails';

const Routes = () => (
	<BrowserRouter>
		<Navbar />
		<Switch>
			<Redirect from="/" to="/auth/login" exact />
			<Route path="/">
				<Auth />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
