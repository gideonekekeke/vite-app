import React, { useEffect } from "react";
import { decoder } from "./TokenDecoder";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";

const ProtectedRoute = ({ children }: any) => {
	const getToken = window.localStorage.getItem("tokenUser" || "");

	if (getToken) {
		const decodingToken: any = decoder(getToken);

		if (decodingToken.exp < Date.now() / 1000) {
			<Navigate to='/signup' />;
		} else {
			return children;
		}
	} else {
		return <SignUp />;
	}
};

export default ProtectedRoute;
