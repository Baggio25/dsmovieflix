import CardMovie from './CardMovie';
import './styles.css';

const Catalog = () => {
	return (
		<div className="catalog-container">
			<div className="base-card catalog-filter-container">
				Filtro Gênero
			</div>
			<div className="catalog-body">
				<div className="row">
					<div className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3">
						<CardMovie />
					</div>
					<div className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3">
						<CardMovie />
					</div>
					<div className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3">
						<CardMovie />
					</div>
					<div className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3">
						<CardMovie />
					</div>
					<div className="col-sm-6 col-lg-6 col-xl-4 col-xxl-3">
						<CardMovie />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
