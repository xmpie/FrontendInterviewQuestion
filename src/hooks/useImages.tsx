import React, { useState, useRef, useEffect, createContext, ReactNode, useContext } from 'react';
import { fetchImages } from '../utils/fetchImages';

const useImagesState = () => {
  const [search, changeSearch] = useState('');
  const [images, changeImages] = useState<Record<string, any>[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => changeSearch(e.target.value);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      fetchImages(search)
        .then((data) => changeImages(data.hits))
        .catch((err) => {
          throw new Error(err);
        });
    }, 600);
  }, [search]);

  return {
    search,
    images,
    handleSearch,
  };
};

interface ImagesProviderContext {
  search: string;
  images: Record<string, any>[];
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImagesContext = createContext<ImagesProviderContext | undefined>(undefined);

interface ImagesContextProviderProps {
  children: ReactNode;
}

export const useImages = () => {
  const imagesContext = useContext(ImagesContext);
  if (imagesContext === undefined) {
    throw new Error('Images context is used outside of its scope');
  }
  return imagesContext;
};

export const ImagesContextProvider = ({ children }: ImagesContextProviderProps) => {
  const contextValue = useImagesState();
  return <ImagesContext.Provider value={contextValue}>{children}</ImagesContext.Provider>;
};
