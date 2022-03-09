import ListaPeliculas from "./ListaPeliculas";

const Home = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<ListaPeliculas titulo="Peliculas Populares" url="popular" />
			<ListaPeliculas titulo="Peliculas Mejor Puntuadas" url="top_rated" />
		</div>
	);
};

export default Home;
