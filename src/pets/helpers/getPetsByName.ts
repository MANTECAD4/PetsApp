import { Pets } from '../data/PetsInfo';

export const getPetsByName = (name: string | (string | null)[] | null) => {
	if (!name || typeof name != 'string') return [];
	const cleanedInput = name.trim().toLowerCase();
	if (cleanedInput.trim().length <= 1) return [];
	return Pets.filter((pet) => pet.name.toLowerCase().includes(cleanedInput));
};
