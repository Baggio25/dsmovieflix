import { ReactComponent as StarIcon } from '../../assets/images/star.svg';
import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

const MovieDetails = () => {
	return (
		<div className="movie-details-container">
			<div className="movie-details-title">
				<h1>Tela detalhes do filme</h1>
				<h1>Id: 1</h1>
			</div>
			<div className="movie-details-card-new-review base-card">
				<form>
					<div className="mb-4">
						<input
							type="text"
							className={`form-control base-input`}
							placeholder="Deixe sua avaliação aqui"
							name="review"
						/>
					</div>
					<div className="movie-details-card-submit">
						<ButtonPrimary text="SALVAR AVALIAÇÃO" />
					</div>
				</form>
			</div>
			<div className="movie-details-card-reviews base-card">
				<div className="movie-details-card-reviews__list">
					<div className="movie-details-card-reviews__top">
						<div className="movie-details-card-review__star">
							<StarIcon />
						</div>
						<div className="movie-details-card-review__person">
							<span>Ana dos Anjos</span>
						</div>
					</div>
					<div className="movie-details-card-review__text">
            <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>
				</div>
				<div className="movie-details-card-reviews__list">
					<div className="movie-details-card-reviews__top">
						<div className="movie-details-card-review__star">
							<StarIcon />
						</div>
						<div className="movie-details-card-review__person">
							<span>Ana dos Anjos</span>
						</div>
					</div>
					<div className="movie-details-card-review__text">
            <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
          </div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
