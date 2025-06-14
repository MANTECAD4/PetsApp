import type { Actions, AuthState } from '../../src/auth/types/auth_types';

export const initialState: AuthState = {
	logged: false,
};

export const loginAction: Actions = {
	type: '[Auth] Login',
	payload: 'Daniel Mtzz',
};

export const logoutAction: Actions = {
	type: '[Auth] Logout',
};
