import { Link, NavLink /* , useNavigate */ } from 'react-router';

export const Navbar = () => {
	// const navigate = useNavigate();

	// // const onLogOut = () => {
	// //     navigate('/login',
	// //         {
	// //             replace: true
	// //         }
	// //     );
	// // }

	return (
		<nav className="container navbar navbar-expand-sm navbar-dark bg-dark mt-3 rounded">
			<Link className="navbar-brand ms-2" to="/">
				Categories
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
						}
						to="/dogs"
					>
						Dogs
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
						}
						to="/cats"
					>
						Cats
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? 'nav-item nav-link active' : 'nav-item nav-link'
						}
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>
			{/* 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link'>
                        Daniel
                    </span>
                    <button 
                        className = 'nav-item btn nav-link btn-danger'
                        onClick = {onLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div> */}
		</nav>
	);
};
