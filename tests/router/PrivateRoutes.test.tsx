import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoutes } from '../../src/router/PrivateRoutes';
import { MemoryRouter } from 'react-router';

describe(`Tests on "PrivateRoutes.tsx" router`, () => {
	test(`User logged behavior - renders children`, () => {
		Storage.prototype.setItem = jest.fn();
		const label = 'Children example - Private Route';
		const authState = { logged: true, username: 'Daniel Mtzz' };
		render(
			<AuthContext.Provider value={{ authState }}>
				<MemoryRouter>
					<PrivateRoutes>
						<h1>{label}</h1>
					</PrivateRoutes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByText(label)).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
	});
});
