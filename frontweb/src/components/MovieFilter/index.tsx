import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from '../../types/genre';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';
import './styles.css';

export type MovieFilterData = {
	genre: Genre | null;
};

type Props = {
	onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {

  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

	const { register, handleSubmit, setValue, control, getValues } =
		useForm<MovieFilterData>();

	const onSubmit = (formData: MovieFilterData) => {
		onSubmitFilter(formData);
	};

	const handleFormClear = () => {
		setValue('genre', null);
	};

	const handleChangeGenre = (value: Genre) => {
		setValue('genre', value);
		const obj: MovieFilterData = {
			genre: getValues('genre'),
		};

		onSubmitFilter(obj);
	};

	useEffect(() => {
		requestBackend({ url: '/genres' }).then((response) => {
			setSelectGenres(response.data.content);
		});
	}, []);

	return (
		<form className="movie-filter-form">
			<div className="movie-filter-genre-container">
				<Controller
					name="genre"
          control={control}
					render={({ field }) => (
						<Select
							{...field}
							options={selectGenres}
							classNamePrefix="product-filter-select"
							isClearable
							placeholder="Gênero"
							onChange={(value) =>
								handleChangeGenre(value as Genre)
							}
							getOptionLabel={(genre: Genre) =>
								genre.name
							}
							getOptionValue={((genre: Genre) =>
								String(genre.id)
              )}
						/>
					)}
				/>
			</div>
		</form>
	);
};

export default MovieFilter;
