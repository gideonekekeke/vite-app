import jwtDecode from "jwt-decode";

export const decoder = (token: any) => {
	const decodedToken = jwtDecode(token);

	return decodedToken;
};
