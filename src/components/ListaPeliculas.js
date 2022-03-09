import { useEffect, useState } from "react";
import PeliculaListaItem from "./PeliculaListaItem";
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
			<h3>{titulo}</h3>
			{peliculas.map((pelicula) => (
				// aca deberia ir un componente tarjeta
				// <p key={pelicula.id}>{pelicula.title}</p>
				<PeliculaListaItem
					key={pelicula.id}
					titulo={pelicula.title}
					imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
					link={`/${pelicula.id}`}
				/>
			))}
		</div>
	);
};

export default ListaPeliculas;
