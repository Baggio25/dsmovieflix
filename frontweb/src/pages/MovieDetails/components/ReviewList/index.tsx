import { ReactComponent as StarIcon } from '../../../../assets/images/star.svg';

type Props = {
	autorReview?: string;
	commentReview?: string;
}

const ReviewList = ({ autorReview, commentReview }: Props) => {
	return (
		<div className="movie-details-card-reviews__list">
			<div className="movie-details-card-reviews__top">
				<div className="movie-details-card-review__star">
					<StarIcon />
				</div>
				<div className="movie-details-card-review__person">
					<span>{autorReview}</span>
				</div>
			</div>
			<div className="movie-details-card-review__text">
				<p className="movie-details-card-review__comment">
          {commentReview}
				</p>
			</div>
		</div>
	);
};

export default ReviewList;
