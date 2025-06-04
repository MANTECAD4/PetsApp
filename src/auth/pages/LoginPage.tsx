import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
	const navigate = useNavigate();

	const { onLogin } = useContext(AuthContext);

	const handleLogin = () => {
		onLogin('Daniel Martinez');
		navigate('/', {
			replace: true,
		});
	};

	return (
		<>
			<div className="container mt-5">
				<h1>Login</h1>
				<hr />
				<button onClick={handleLogin} className="btn btn-info">
					Login
				</button>
			</div>
		</>
	);
};
