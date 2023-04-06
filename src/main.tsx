import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider, Text } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/AllRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				colorScheme: "light",
				colors: {
					silver: ["#123456", "#000"],
				},
			}}>
			{/* <App /> */}
			<RouterProvider router={element} />
		</MantineProvider>
	</React.StrictMode>,
);
