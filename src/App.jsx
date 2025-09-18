import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Usluge from "./pages/Usluge";
import ONama from "./pages/ONama";
import ZastoMi from "./pages/ZastoMi";
import Kontakt from "./pages/Kontakt";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/usluge" element={<Usluge />} />
					<Route path="/o-nama" element={<ONama />} />
					<Route path="/zasto-mi" element={<ZastoMi />} />
					<Route path="/kontakt" element={<Kontakt />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
