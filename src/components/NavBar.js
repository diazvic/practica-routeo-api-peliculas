import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
const NavBar = () => {
	return (
		<div>
			<AppBar></AppBar>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/ultimoslanzamientos">Ultimos lanzamientos</Link>
				</li>
				<li>
					<Link to="/populares">Populares</Link>
				</li>
				<li>
					<Link to="/buscar">Buscar</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
