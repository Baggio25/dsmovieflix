import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Movie } from '../../types/movie';
import { hasAnyRoles, requestBackend } from '../../util/requests';
import ReviewList from './components/ReviewList';
import './styles.css';

type ParamsType = {
	movieId: string;
};

const MovieDetails = () => {
	const { movieId } = useParams<ParamsType>();
	const [movie, setMovie] = useState<Movie>();

	useEffect(() => {
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: `/movies/${movieId}`,
			withCredentials: true,
		};

		requestBackend(config).then((response) => {
			setMovie(response.data);
			console.log(response.data);
		});
	}, [movieId]);

	return (
		<div className="movie-details-container">
			<div className="movie-details-title">
				<h1>Tela detalhes do filme</h1>
				<h1>Id: {movie?.id}</h1>
			</div>
			{hasAnyRoles(['ROLE_MEMBER']) && (
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
			)}
			<div className="movie-details-card-reviews base-card">
				{movie?.reviews.map((review) => (
					<ReviewList
						key={review.id}
						autorReview={review.user.name}
						commentReview={review.text}
					/>
				))}
			</div>
		</div>
	);
};

export default MovieDetails;
