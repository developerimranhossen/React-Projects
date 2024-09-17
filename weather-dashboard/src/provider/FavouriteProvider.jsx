import { useLoaclStorage } from "../components/hooks";
import { FavouriteContext } from "../context";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFaourites] = useLoaclStorage("favourite", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFaourites([...favourites, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFaourites(restFavourites)
  };
  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider
