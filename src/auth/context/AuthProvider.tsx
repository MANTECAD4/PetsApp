import { useReducer, type ReactNode } from 'react';
import { authReducer } from './authReducer';
import type { Actions } from '../types/auth_types';
import { AuthContext } from './AuthContext';

type Props = {
	children: ReactNode;
};

const init = () => {
	const rawUsername = localStorage.getItem('username');
	let username;
	try {
		username = rawUsername ? JSON.parse(rawUsername) : null;
	} catch (e) {
		username = null;
	}
	return {
		logged: !!username,
		username,
	};
};

export const AuthProvider = ({ children }: Props) => {
	const [authState, dispatch] = useReducer(authReducer, {}, init);

	const onLogin = (username: string = '') => {
		const action: Actions = { type: '[Auth] Login', payload: username };
		localStorage.setItem('username', JSON.stringify(action.payload));
		dispatch(action);
	};

	const onLogout = () => {
		localStorage.removeItem('username');
		const action: Actions = { type: '[Auth] Logout', payload: undefined };
		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ authState, onLogin, onLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
