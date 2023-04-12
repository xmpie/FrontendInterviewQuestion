import React, { ReactNode, createContext, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { removeKey } from '../utils/removeKey';

type FavouritesState = Record<string, any>;
type FavouritesHandler = (key: string, image: Record<string, any>) => void;

type Favourites = [FavouritesState, FavouritesHandler] | undefined;

const LOCAL_FAVOURITES_KEY = 'my_image_search_favourites';

const useFavouritesState: () => [FavouritesState, FavouritesHandler] = () => {
  const [favourites, changeFavourites] = useLocalStorage(
    LOCAL_FAVOURITES_KEY,
    {} as Record<string, any>
  );

  const handleFavourites = (key: string, image: Record<string, any>) => {
    let newFavourites = { ...favourites };
    if (newFavourites.hasOwnProperty(key)) {
      newFavourites = removeKey(newFavourites, key);
    } else {
      newFavourites[key] = image;
    }
    changeFavourites(newFavourites);
  };

  return [favourites, handleFavourites];
};

const FavouritesContext = createContext<Favourites>(undefined);

export const useFavourites = () => {
  const favouritesCtx = useContext(FavouritesContext);

  if (!favouritesCtx) {
    throw new Error('Favourites are used outside its context');
  }
  return favouritesCtx;
};

interface FavouritesContextProviderProps {
  children: ReactNode;
}

export const FavouritesContextProvider = ({ children }: FavouritesContextProviderProps) => {
  const favouritesCtx = useFavouritesState();
  return <FavouritesContext.Provider value={favouritesCtx}>{children}</FavouritesContext.Provider>;
};
