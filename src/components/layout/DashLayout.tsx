import React from "react";
import { NavBar, SideBar } from "../blocks";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
	return (
		<div>
			<div style={{ display: "flex" }}>
				<NavBar />
				<SideBar />
			</div>
			<Outlet />
		</div>
	);
};

export default DashLayout;
