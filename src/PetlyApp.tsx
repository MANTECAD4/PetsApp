import { HashRouter } from 'react-router';
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const PetlyApp = () => {
	return (
		<>
			<HashRouter>
				<AuthProvider>
					<AppRouter />
				</AuthProvider>
			</HashRouter>
		</>
	);
};
