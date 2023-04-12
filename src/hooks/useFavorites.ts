import { createContext, useContext } from 'react';
import { useSetLocalStorage } from './useLocalStorage';

type FavouritesState = Set<string>;
type FavouritesHandler = (key: string) => void;

type Favourites = [FavouritesState, FavouritesHandler] | undefined;

const LOCAL_FAVOURITES_KEY = 'my_image_search_favourites';

export const useFavouritesState: () => [FavouritesState, FavouritesHandler] = () => {
  const [favourites, changeFavourites] = useSetLocalStorage(
    LOCAL_FAVOURITES_KEY,
    new Set<string>()
  );

  const handleFavourites = (key: string) => {
    const newFavourites = new Set(favourites);
    if (newFavourites.has(key)) {
      newFavourites.delete(key);
    } else {
      newFavourites.add(key);
    }
    changeFavourites(newFavourites);
  };

  return [favourites, handleFavourites];
};

export const FavouritesContext = createContext<Favourites>(undefined);

export const useFavourites = () => {
  const favouritesCtx = useContext(FavouritesContext);

  if (!favouritesCtx) {
    throw new Error('Favourites are used outside its context');
  }
  return favouritesCtx;
};
