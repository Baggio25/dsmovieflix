import { ReactComponent as MovieImage } from '../../../assets/images/movie.svg';
import './styles.css';

const CardMovie = () => {
	return (
		<div className="base-card movie-card">
			<div className="movie-image">
				<MovieImage />
			</div>
			<div className="movie-description">
				<h3>O Retorno do Rei</h3>
				<h4>2013</h4>
				<p>O olho do inimigo está se movendo.</p>
			</div>
		</div>
	);
};

export default CardMovie;
