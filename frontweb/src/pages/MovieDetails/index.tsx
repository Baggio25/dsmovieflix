import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Movie } from '../../types/movie';
import { ReviewInsert } from '../../types/review';
import { hasAnyRoles } from '../../util/auth';
import history from '../../util/history';
import { requestBackend } from '../../util/requests';
import ReviewList from './components/ReviewList';
import './styles.css';

type ParamsType = {
	movieId: string;
};

const MovieDetails = () => {
	const { movieId } = useParams<ParamsType>();
	const [movie, setMovie] = useState<Movie>();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ReviewInsert>();

	const onSubmit = (formData: ReviewInsert) => {
		const data = {
			text: formData.text,
			movieId: movieId,
		};

		const config: AxiosRequestConfig = {
			method: 'POST',
			url: '/reviews',
			data,
			withCredentials: true,
		};

		requestBackend(config)
			.then(() => {
				history.go(0);
				console.log('Gravou', config.data);
			})
			.catch((error) => {
				alert('Erro ao tentar adicionar Review ' + error);
			});
	};

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
			<div className="base-card movie-details">
				<div className="movie-details-image">
					<img src={movie?.imgUrl} alt={movie?.title} />
				</div>
				<div className="movie-details-description">
					<h3>{movie?.title}</h3>
					<h4>{movie?.year}</h4>
					<p>{movie?.subTitle}</p>
				</div>
				<div className="movie-details-synopse">
					<p>{movie?.synopsis}</p>
				</div>
			</div>
			{hasAnyRoles(['ROLE_MEMBER']) && (
				<div className="movie-details-card-new-review base-card">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-4">
							<input
								{...register('text', {
									required: 'Campo obrigatório',
								})}
								type="text"
								className={`form-control base-input ${
									errors.text ? 'is-invalid' : ''
								}`}
								placeholder="Deixe sua avaliação aqui"
								name="text"
							/>
						</div>
						<div className="invalid-feedback d-block">
							{errors.text?.message}
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
