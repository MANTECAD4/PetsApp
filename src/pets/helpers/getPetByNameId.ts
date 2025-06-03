import { Pets } from "../data/PetsInfo"

export const getPetByNameId = ( name:string ) => {
    return Pets.find (pet => pet.name.toLowerCase() === name);
}
