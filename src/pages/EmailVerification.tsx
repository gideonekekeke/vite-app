import React from "react";
import { Link } from "react-router-dom";
const EmailVerification = () => {
	return (
		<div>
			<h3>Email Veridication</h3>
			<p>your email account has been verified</p>
			<Link to='/signup'>
				<button>Go to Login</button>
			</Link>
		</div>
	);
};

export default EmailVerification;
