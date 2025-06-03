import { PetsList } from '../components';

export const CatsPage = () => {
  return (
    <>
        <h1>The most popular cats species!</h1>
        <hr/>
        <PetsList specie = { 'felis catus' } />
    </>
  );
}
