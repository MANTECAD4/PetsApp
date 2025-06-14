import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRouter } from '../../src/router/AppRouter';
import { AuthContext } from '../../src/auth/context/AuthContext';
describe(`Tests on "AppRouter.tsx" router`, () => {
	test(`No user logged Behavior - nevigates back to login`, () => {
		const authState = { logged: false };
		render(
			<MemoryRouter initialEntries={['/cats']}>
				<AuthContext.Provider value={{ authState }}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getAllByText('Login').length).toBeGreaterThan(0);
	});
	test(`User logged Behavior - nevigates to categories page`, () => {
		const authState = { logged: true, username: 'Daniel Mtz' };
		render(
			<MemoryRouter initialEntries={['/login']}>
				<AuthContext.Provider value={{ authState }}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getAllByText('Cats').length).toBeGreaterThan(0);
		expect(screen.getAllByText('Dogs').length).toBeGreaterThan(0);
	});
});
