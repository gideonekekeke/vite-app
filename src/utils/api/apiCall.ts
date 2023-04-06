import axios from "./axios";
// import { useNavigate } from "react-router-dom";

type IUser = {
	name?: string;
	email: string;
	password: string;
};

// const Navigate = useNavigate();

export const registerUser = async (data: IUser) => {
	await axios
		.post("/api/auth/register", data)
		.then((res) => {
			alert(res.data.message);
		})
		.catch((err) => {
			alert(err.response.data.message);
		});
};

export const LoginUser = async (data: IUser) => {
	await axios
		.post("/api/auth/login", data)
		.then((res) => {
			alert(res.data.message);
			console.log(res.data);
			window.localStorage.setItem("tokenUser", res.data.token);
		})
		.catch((err) => {
			alert(err.response.data.message);
		});
};
