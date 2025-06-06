import { Route, Routes } from 'react-router';
import { LoginPage } from '../auth/pages/index.ts';
import { PetlyRoutes } from '../pets/routes/PetlyRoutes.tsx';
import { PrivateRoutes } from './PrivateRoutes.tsx';
import { PublicRoutes } from './PublicRoutes.tsx';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path="login"
					element={
						<PublicRoutes>
							<LoginPage />
						</PublicRoutes>
					}
				/>
				<Route
					path="/*"
					element={
						<PrivateRoutes>
							<PetlyRoutes />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</>
	);
};
