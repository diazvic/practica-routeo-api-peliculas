import { Link } from "react-router-dom";

const PeliculaListaItem = ({ titulo, imagen, link }) => {
	return (
		<div>
			<img src={imagen} />
			<p>{titulo}</p>
			<a href={link}></a>
		</div>
	);
};

export default PeliculaListaItem;
