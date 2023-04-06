import React, { useEffect } from "react";
import { useNavigate, RouterProvider, Navigate } from "react-router-dom";
import { element } from "./routes/AllRoutes";
import { decoder } from "./routes/TokenDecoder";

const App = () => {
	const token = window.localStorage.getItem("tokenUser");
	const navigate = useNavigate();

	useEffect(() => {
		const decoders: any = decoder(token);
		if (decoders?._id) {
			navigate("/dashboard");
		}
	}, [token]);

	return <RouterProvider router={element} />;
};

export default App;
