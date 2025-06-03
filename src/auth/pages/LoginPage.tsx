import { useNavigate } from 'react-router';

export const LoginPage = () => {
	const navigate = useNavigate();

	const onLogIn = () => {
		navigate('/', {
			replace: true,
		});
	};

	return (
		<>
			<div className="container mt-5">
				<h1>Login</h1>
				<hr />
				<button onClick={onLogIn} className="btn btn-info">
					Login
				</button>
			</div>
		</>
	);
};
