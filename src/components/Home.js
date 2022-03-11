import ListaPeliculas from "./ListaPeliculas";
import Carousel from "./Carousel";
const Home = () => {
	return (
		<div className="container">
			{/* <div className="contenedor-carousel">
				<Carousel />
			</div> */}
			<h1>Home</h1>

			<ListaPeliculas titulo="Peliculas Populares" url="popular" />
			<ListaPeliculas titulo="Peliculas Mejor Puntuadas" url="top_rated" />
		</div>
	);
};

export default Home;
