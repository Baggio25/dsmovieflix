import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieFilter, { MovieFilterData } from '../../components/MovieFilter';
import { Movie } from '../../types/movie';
import { SpringPage } from '../../types/vendor/spring';
import { requestBackend } from '../../util/requests';
import CardMovie from './CardMovie';
import './styles.css';

type ControlComponentsData = {
	activePage: number;
	filterData: MovieFilterData;
};

const Catalog = () => {
	const [page, setPage] = useState<SpringPage<Movie>>();

	const [controlComponentsData, setControlComponentsData] =
		useState<ControlComponentsData>({
			activePage: 0,
			filterData: { genre: null },
		});

	const handlePageChange = (pageNumber: number) => {
		setControlComponentsData({
			activePage: pageNumber,
			filterData: controlComponentsData.filterData,
		});
	};

	const handleSubmitFilter = (filterData: MovieFilterData) => {
		setControlComponentsData({ activePage: 0, filterData: filterData });
	};

	const getMovies = useCallback(() => {
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: `/movies?sort=id,desc`,
			params: {
				page: controlComponentsData.activePage,
				size: 8,
				genreId: controlComponentsData.filterData.genre?.id,
			},
		};

		requestBackend(config).then((response) => {
			setPage(response.data);
			console.log(response.data);
		});
	}, [controlComponentsData]);

	useEffect(() => {
		getMovies();
	}, [getMovies]);

	return (
		<div className="catalog-container">
			<div className="base-card catalog-filter-container">
				<MovieFilter onSubmitFilter={handleSubmitFilter} />
			</div>
			<div className="catalog-body">
				<div className="row">
					{page?.content.map((movie) => (
						<div
							className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3"
							key={movie.id}
						>
							<Link to={`/movies/${movie.id}`}>
								<CardMovie />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Catalog;
