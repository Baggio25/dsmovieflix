import { ReactComponent as MovieImage } from '../../assets/images/movie.svg';
import './styles.css';

const Catalog = () => {
	return (
		<div className="catalog-container">
			<div className="base-card catalog-filter-container">
				Filtro Gêrnero
			</div>
			<div className="catalog-body">
				<div className="base-card catalog-movie-card">
					<div className="catalog-movie-image">
						<MovieImage />
					</div>
					<div className="catalog-movie-description">
						<h3>O Retorno do Rei</h3>
						<h4>2013</h4>
						<p>O olho do inimigo está se movendo.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
