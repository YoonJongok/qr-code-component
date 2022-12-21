import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QRCode } from "./pages/QRCode";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<QRCode />} />
			</Routes>
		</BrowserRouter>
	);
};
