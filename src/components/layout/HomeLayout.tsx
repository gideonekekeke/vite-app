import React from "react";
import { Header } from "../blocks";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default HomeLayout;
