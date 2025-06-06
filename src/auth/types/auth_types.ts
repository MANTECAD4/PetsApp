export const actionTypes = {
	login: '[Auth] Login',
	logout: '[Auth] Logout',
};
export type Actions = {
	type: '[Auth] Login' | '[Auth] Logout';
	payload?: string;
};
export type AuthState = {
	logged: boolean;
	username?: string;
};
