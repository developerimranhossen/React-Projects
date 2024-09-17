import { useContext, useEffect, useState } from "react";
import HeartIcn from "../../assets/heart.svg";
import RedHeartIcn from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";

function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const {latitude, longitude, location} = weatherData

  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const find = favourites.find((fav) => fav.location === location)
    setIsFavourite(find)
  }, [])
  function handleFavourite() {
    const find = favourites.find((fav) => fav.location === location)
    if(!find) {
      addToFavourites(latitude, longitude, location)
    } else {
      removeFromFavourites(location)
    }
    setIsFavourite(!isFavourite);
  }
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcn : HeartIcn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavourite;
