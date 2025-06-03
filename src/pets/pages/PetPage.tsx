import { Navigate, useNavigate, useParams } from 'react-router';
import { getPetByNameId } from '../helpers/getPetByNameId';
import { useMemo } from 'react';

export const PetPage = () => {
	const { name } = useParams();

	const currentPet = useMemo(() => getPetByNameId(name!), [name]);

	if (!currentPet) return <Navigate to="/cats" />;

	const navigate = useNavigate();

	const onNavigateBack = () => {
		// navigate(`/${(currentPet.subspecie === 'felis catus')? 'cats': 'dogs'}`);
		navigate(-1);
	};

	const petImgUrl = `${import.meta.env.BASE_URL}assets/pets-images/${
		currentPet.id
	}.jpg`;

	return (
		<div className="row mt-3 animate__animated animate__fadeInLeft">
			<div className="col-4">
				<img className="img-thumbnail" src={petImgUrl} alt={currentPet?.name} />
			</div>
			<div className="col-8">
				<h2 className="card-title">{currentPet?.name}</h2>
				<hr />
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{' '}
						<b>Origin: </b> {currentPet?.origin}{' '}
					</li>
					<li className="list-group-item">
						{' '}
						<b>Temperament: </b> {currentPet?.temperament.join(', ')}{' '}
					</li>
					<li className="list-group-item">
						{' '}
						<b>Size: </b> {currentPet?.size}{' '}
					</li>
					<li className="list-group-item">
						{' '}
						<b>Energy level (1 - Less / 5 - More): </b>{' '}
						{currentPet?.energyLevel}{' '}
					</li>
					<li className="list-group-item">
						{' '}
						<b>Grooming Needs: </b>{' '}
						{currentPet?.groomingNeeds ? 'Yes' : 'No'}{' '}
					</li>
					<li className="list-group-item">
						{' '}
						<b>Life Span: </b> {currentPet?.lifeSpan}{' '}
					</li>
				</ul>
				<p className="card-text mt-2">{currentPet?.description}</p>
				<div className="align-items-center">
					{/* <Link 
          className = 'btn btn-primary' 
          to='/'
        >
          Back
        </Link> */}
					<button className="btn btn-primary" onClick={onNavigateBack}>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};
