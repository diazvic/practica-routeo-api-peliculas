import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PeliculaListaItem = ({ titulo, imagen, link }) => {
	return (
		<div className="pelicula-lista">
			<img src={imagen} />
			<p>{titulo}</p>
			<a href={link}>
				<ArrowForwardIosIcon
					sx={{
						bgcolor: "info.main",
						color: "#ffffff",
						borderRadius: "50%",
						p: 1,
					}}
				/>
			</a>
		</div>
	);
};

export default PeliculaListaItem;
