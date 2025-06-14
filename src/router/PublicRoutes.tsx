import { useContext } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router';

type Props = {
	children: ReactNode;
};

export const PublicRoutes = ({ children }: Props) => {
	const { authState } = useContext(AuthContext);

	const lastPath = localStorage.getItem('lastPath');

	return !authState.logged && !authState.username ? (
		children
	) : (
		<Navigate to={lastPath != null ? lastPath : '/cats'} />
	);
};
