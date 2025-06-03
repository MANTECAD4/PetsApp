import { Route, Routes } from 'react-router';
import { LoginPage } from '../auth/pages/index.ts';
import { PetlyRoutes } from '../pets/routes/PetlyRoutes.tsx';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<PetlyRoutes />} />
			</Routes>
		</>
	);
};
