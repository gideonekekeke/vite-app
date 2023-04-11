import React, { useEffect } from "react";
import { decoder } from "./TokenDecoder";
import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";

const ProtectedRoute = () => {
	const getToken = window.localStorage.getItem("tokenUser" || "");

	if (getToken) {
		const decodingToken: any = decoder(getToken);

		if (decodingToken.exp < Date.now() / 1000) {
			return <Navigate to='/signup' />;
		} else {
			return <Outlet />;
		}
	} else {
		return <Navigate to='/signup' />;
	}
};

export default ProtectedRoute;
