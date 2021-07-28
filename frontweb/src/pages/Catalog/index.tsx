import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from '../../util/requests';
import './styles.css';

const Catalog = () => {
	return (
		<div className="catalog-container">
			<h1>{isAuthenticated() ? 'Autenticado' : 'Não atenticado'}</h1>
			<div className="catalog-title">
				<h1>Tela listagem de filmes</h1>
			</div>
			<div className="catalog-body">
				<Link to="movies/1">
					<span>Acessar /movies/1</span>
				</Link>
				<Link to="movies/2">
					<span>Acessar /movies/2</span>
				</Link>
			</div>
		</div>
	);
};

export default Catalog;
