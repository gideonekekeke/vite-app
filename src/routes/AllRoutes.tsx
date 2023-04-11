import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashLayout, HomeLayout } from "../components/layout";
import DashBoardHome from "../pages/DashBoardHome";
import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import VerifiedPage from "../pages/VerifiedPage";
import ErrorBoundary from "../utils/hoc/ErrorBoundary";
import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";

export const element = createBrowserRouter([
	{
		path: "/",

		hasErrorBoundary: true,
		errorElement: <ErrorBoundary />,
		children: [
			{
				element: <HomeLayout />,
				children: [
					{
						index: true,
						element: <HomePage />,
					},
				],
			},

			{
				path: "signup",
				element: <SignUp />,
			},
			{
				path: "sucess-page",
				element: <VerifiedPage />,
			},

			{
				path: "api/auth/verify/:token",
				element: <EmailVerification />,
			},

			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "dashboard",
						element: <DashLayout />,
						children: [
							{
								index: true,
								element: <DashBoardHome />,
							},
						],
					},
				],
			},
		],
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
