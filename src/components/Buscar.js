import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Buscar = () => {
	const [busquedaDeParametros, setBusquedaDeParametros] = useSearchParams({
		query: "",
	});

	const [personajes, setPersonajes] = useState([]);
	useEffect(() => {
		fetch(
			`https://rickandmortyapi.com/api/character?name=${busquedaDeParametros.get(
				"query"
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				setPersonajes(data.results);
			});
	}, [busquedaDeParametros]);
	const handleOnChange = (e) => {
		e.preventDefault();
		setBusquedaDeParametros({ query: e.target.value });
	};

	return (
		<div>
			<h1>Buscar</h1>

			<form>
				<input
					type="text"
					onChange={handleOnChange}
					value={busquedaDeParametros.get("query")}
				></input>
			</form>
			<button>Enviar</button>
			{personajes.map((personaje) => (
				<h1>{personaje.name}</h1>
			))}
		</div>
	);
};

export default Buscar;
