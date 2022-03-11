import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Carousel = () => {
	return (
		<div>
			<Slider
				dots={true}
				arrows={true}
				slidesToShow={1}
				autoplay={false}
				autoplaySpeed={1000}
			>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div>
					<img src="http://placekitten.com/g/400/200" />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
