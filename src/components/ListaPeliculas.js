import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect, useState } from "react";
import PeliculaListaItem from "./PeliculaListaItem";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";
const ListaPeliculas = ({ titulo, url }) => {
	const [peliculas, setPeliculas] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${url}?api_key=2d1d912928e5c447a9dcdeaf620cab9b`
		)
			.then((res) => res.json())
			.then((data) => setPeliculas(data.results));
	}, []);

	return (
		<div className="lista-peliculas">
			<Typography
				variant="h4"
				sx={{
					display: "flex",
					justifyContent: "center",
					color: "#ffffff",
					bgcolor: "#001529",
					fontWeight: "small",
				}}
			>
				{titulo}
			</Typography>

			{peliculas.map((pelicula) => (
				// aca deberia ir un componente tarjeta
				// <p key={pelicula.id}>{pelicula.title}</p>
				<Box>
					<Card sx={{ m: 2 }}>
						<CardContent>
							<PeliculaListaItem
								sx={{}}
								key={pelicula.id}
								titulo={pelicula.title}
								imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
								link={`/${pelicula.id}`}
							/>
						</CardContent>
					</Card>
				</Box>
			))}
		</div>
	);
};

export default ListaPeliculas;
