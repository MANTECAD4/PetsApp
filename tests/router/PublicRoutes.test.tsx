import { render, screen } from '@testing-library/react';
import { PublicRoutes } from '../../src/router/PublicRoutes';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router';

describe(`Tests on "PublicRoutes.tsx" router`, () => {
	test(`No user logged behavior - renders children`, () => {
		const label = 'Children example - Public Route';
		const authState = { logged: false };
		render(
			<AuthContext.Provider value={{ authState }}>
				<PublicRoutes>
					<h1>{label}</h1>
				</PublicRoutes>
			</AuthContext.Provider>
		);
		expect(screen.getByText(label)).toBeTruthy();
	});

	test(`User logged behavior - renders Navigate`, () => {
		const label = 'Hello from cats page!';
		const authState = { logged: true, username: 'Daniel Mtz' };
		render(
			<AuthContext.Provider value={{ authState }}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path="login"
							element={
								<PublicRoutes>
									<h1>This component shouldn't be rendered</h1>
								</PublicRoutes>
							}
						/>
						<Route path="cats" element={<h1>{label}</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(screen.getByText(label)).toBeTruthy();
	});
});
