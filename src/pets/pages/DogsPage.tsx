import { PetsList } from '../components';

export const DogsPage = () => {
  return (
    <>
        <h1>The most popular dogs species!</h1>
        <hr/>
        <PetsList specie = { 'canis lupus familiaris' } />
    </>
  );
}
