import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:1400",
	headers: {
		"Content-Type": "application/json",
	},
	// withCredentials: true,
});

const successHandler = (response: any) => {
	// if (
	// 	!response.data.successful &&
	// 	response.data.message === "Your session has expired, Please login."
	// ) {
	// 	localStorage.clear();
	// 	window.location.replace("/");
	// }
	// if (!response.data.successful) {
	// 	return Promise.reject(response.data);
	// }
	return response;
};

const errorHandler = (error: any) => Promise.reject(error);

instance.interceptors.response.use(
	(response: any) => successHandler(response),
	(error: any) => errorHandler(error),
);

export default instance;
