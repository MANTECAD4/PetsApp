import { PetCard } from './';
import { getPetsBySpecie } from '../helpers';
import { useMemo } from 'react';

type Props = {
	specie: string;
};

export const PetsList = ({ specie }: Props) => {
	const pets = useMemo(() => getPetsBySpecie(specie), [specie]);
	return (
		<>
			<div className="row rows-cols-1 row-cols-md-3 g-3">
				{pets.map((pet) => (
					<PetCard key={pet.id} pet={pet} />
				))}
			</div>
		</>
	);
};
