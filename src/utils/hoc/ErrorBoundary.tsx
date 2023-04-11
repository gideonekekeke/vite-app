import { useRouteError } from "react-router";

const ErrorBoundary = () => {
	let error = useRouteError();
	console.log(error);

	return <div>Error</div>;
};

export default ErrorBoundary;
