import { useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieProvider";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  }
};

const MovieList = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <Carousel responsive={responsive} className="carousel-container">
        {data && data.length > 0 && data.map((item) => (
          <div 
            key={item.id}
            className="relative group cursor-pointer m-4"
            onClick={() => handleTrailer(item.id)}
          >
            <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title || item.original_title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-2">
                <p className="uppercase text-md">{item.title || 'Unknown Title'}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default MovieList;

