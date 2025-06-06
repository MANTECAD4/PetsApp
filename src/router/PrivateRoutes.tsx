import { useContext } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router';

type Props = {
	children: ReactNode;
};

export const PrivateRoutes = ({ children }: Props) => {
	const { authState } = useContext(AuthContext);
	const { pathname, search } = useLocation();

	const lastPath = pathname + search;
	localStorage.setItem('lastPath', lastPath);

	return authState.logged && !!authState.username ? (
		children
	) : (
		<Navigate to="/login" />
	);
};
