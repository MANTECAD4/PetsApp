import { authReducer } from '../../src/auth/context/authReducer';
import type { Actions, AuthState } from '../../src/auth/types/auth_types';
import {
	initialState,
	loginAction,
	logoutAction,
} from '../fixtures/authFixtures';
describe(`Tests on "authReducer.ts"`, () => {
	test('returns the initial state', () => {
		const state = authReducer(initialState);
		expect(state).toEqual(initialState);
	});

	test('Login action behavior ', () => {
		const { logged, username } = authReducer(initialState, loginAction);
		expect(logged).toBeTruthy();
		expect(username).toBe(loginAction.payload);
	});

	test('Logout action behavior ', () => {
		const { logged, username } = authReducer(initialState, logoutAction);
		expect(logged).toBeFalsy();
		expect(username).toBeUndefined();
	});
});
