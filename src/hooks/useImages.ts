import React, { useState, useRef, useEffect } from 'react';
import { fetchImages } from '../utils/fetchImages';

export function useImages() {
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
}
