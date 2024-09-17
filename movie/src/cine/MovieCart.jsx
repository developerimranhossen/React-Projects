/* eslint-disable react/prop-types */
import { getImgUrl } from "../utils/cine-utility";
import Rating from "../cine/Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

export default function MovieCart({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);
  console.log(state.cartData);
  function handleToCart(e, movie) {
    e.stopPropagation();
    // console.log(movie);

    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    } else {
      console.error(`The move ${item.title} has been added to cart already`);
    }
    toast.success(`Removed ${item.title} from Cart !`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }

  function handleModalClose() {
    setShowModal(false);
    setSelectedMovie(null);
  }

  function handleMovieSelection(movie) {
    setShowModal(true);
    setSelectedMovie(movie);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCardAdd={handleToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
