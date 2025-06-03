import { Route, Routes } from 'react-router';
import { CatsPage, DogsPage, HomePage, PetPage, SearchPage } from '../pages';
import { Navbar } from '../../../ui/components/index.ts';

export const PetlyRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="cats" element={<CatsPage />} />
					<Route path="dogs" element={<DogsPage />} />
					<Route path="pet/:name" element={<PetPage />} />
					<Route path="search" element={<SearchPage />} />
					{/* <Route path="/*" element =      { <Navigate to={'/'}/> } /> */}
				</Routes>
			</div>
		</>
	);
};
