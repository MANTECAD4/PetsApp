import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../ui/components/Navbar';

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useNavigate: () => mockNavigate,
}));

describe(`Tests on "Navbar.tsx" component`, () => {
	const authState = {
		logged: true,
		username: 'Daniel Mtzz',
	};

	const onLogin = jest.fn();
	const onLogout = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test(`Shows current user`, () => {
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ authState, onLogin, onLogout }}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(screen.getByText(authState.username)).toBeTruthy();
	});

	test(`Logout button behavior`, () => {
		render(
			<MemoryRouter>
				<AuthContext.Provider value={{ authState, onLogin, onLogout }}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		const logoutBtn: HTMLButtonElement = screen.getByRole('button', {
			name: 'Logout',
		});
		fireEvent.click(logoutBtn);
		expect(onLogout).toHaveBeenCalled();
		expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
