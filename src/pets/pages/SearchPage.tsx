import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { useForm } from '../../hooks';
import { getPetsByName } from '../helpers/';
import { useMemo } from 'react';
import { MatchAltert, PetCard } from '../components';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const query = queryString.parse(location.search);
	const { q = '' } = query;

	const pets = useMemo(() => getPetsByName(q), [q]);

	const { formState, onInputChange, onResetForm } = useForm({
		searchText: q && typeof q === 'string' ? q : '',
	});
	const { searchText } = formState;

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (typeof searchText !== 'string') return;
		const cleanedInput = searchText.trim().toLowerCase();
		if (cleanedInput.length <= 1) return;
		navigate(`?q=${cleanedInput}`);
		// onResetForm();
	};

	return (
		<>
			<h1>Search</h1>
			<div className="">
				<hr />
				<div className="row">
					<div className="col-5">
						<div className="text-center">
							<h4>ˁ˚ᴥ˚ˀ</h4>
						</div>
						<hr />
						<form onSubmit={(event) => onSubmitForm(event)} className="mt-2">
							<div className="row">
								<div className="col-9">
									<input
										type="text"
										placeholder="Search a pet..."
										className="form-control"
										name="searchText"
										autoComplete="off"
										value={searchText}
										onChange={onInputChange}
									/>
								</div>
								<div className="col-2">
									<button className="btn btn-outline-primary">Search</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-7">
						<MatchAltert queryParam={q} petsLength={pets.length} />
					</div>
				</div>
			</div>
			<hr />
			<div className="row rows-cols-1 row-cols-md-3 g-3">
				{pets.map((pet) => (
					<PetCard key={pet.id} pet={pet} />
				))}
			</div>
		</>
	);
};
