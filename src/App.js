import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Populares from "./components/Populares";
import Buscar from "./components/Buscar";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import DetallesPeliculas from "./components/DetallesPeliculas";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/ultimoslanzamientos" element={<DetallesPeliculas />} />
					<Route
						path="pelicula/:idDetallePelicula"
						element={<DetallesPeliculas />}
					/>
					<Route path="/populares" element={<DetallesPeliculas />} />
					<Route path="/buscar" element={<Buscar />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
