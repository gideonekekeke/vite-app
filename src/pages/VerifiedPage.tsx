import React from "react";
import { Link } from "react-router-dom";

const VerifiedPage = () => {
	const token = new URLSearchParams(window.location.search).get("token");
	localStorage.setItem("tokenUser", token || "");
	return (
		<div style={{ marginTop: "200px" }}>
			<h3> Google Account Verification Complete</h3>
			<p>Your google account has been activated successfully </p>
			<Link to='/dashboard'>
				<button>Continue</button>
			</Link>
		</div>
	);
};

export default VerifiedPage;
