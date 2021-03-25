import React from "react";

import "./styles/App.css";
import "./styles/index.css";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div
				className="flex p-5 flex-col justify-center text-center"
				style={{ minWidth: "100vw", minHeight: "100vh" }}
			>
				<h1 className="text-5xl font-semibold">
					This is a responsive navbar!
				</h1>
				<p className="text-2xl">
					Try resizing the window to see how it responds to different
					screen sizes.
				</p>
			</div>
		</>
	);
};

export default App;
