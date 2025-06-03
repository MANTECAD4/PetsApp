import { Pets } from '../data/PetsInfo.ts';

export const getPetsBySpecie = (specie: string = 'felis catus') => {
	if (!['felis catus', 'canis lupus familiaris'].includes(specie))
		throw new Error(`Specie ${specie} is not a valid value.`);

	return Pets.filter((pet) => pet.subspecie === specie);
};
