import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashLayout, HomeLayout } from "../components/layout";
import DashBoardHome from "../pages/DashBoardHome";
import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import VerifiedPage from "../pages/VerifiedPage";
import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";

export const element = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},

	{
		path: "/signup",
		element: <SignUp />,
	},

	{
		path: "/sucess-page",
		element: <VerifiedPage />,
	},

	{
		path: "/api/auth/verify/:token",
		element: <EmailVerification />,
	},

	{
		path: "/dashboard",
		element: (
			<ProtectedRoute>
				<DashLayout />
			</ProtectedRoute>
		),

		children: [
			{
				index: true,
				element: <DashBoardHome />,
			},
		],
	},
]);
