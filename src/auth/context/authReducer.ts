import { actionTypes, type Actions, type AuthState } from '../types/auth_types';

export const authReducer = (state: AuthState, action: Actions): AuthState => {
	switch (action.type) {
		case actionTypes.login:
			return {
				...state,
				logged: true,
				username: action.payload,
			};

		case actionTypes.logout:
			return {
				...state,
				logged: false,
				username: undefined,
			};
		default:
			return state;
	}
};
