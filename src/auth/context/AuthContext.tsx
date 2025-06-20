import { createContext } from 'react';
import type { AuthState } from '../types/auth_types';

type AuthContextType = {
	authState: AuthState;
	onLogin: (username?: string) => void;
	onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
	authState: { logged: false, username: '' },
	onLogin: () => {},
	onLogout: () => {},
});
