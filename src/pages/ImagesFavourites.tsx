import React from 'react';
import { ImagesGallery } from '../components/ImagesGallery';
import { useFavourites } from '../hooks/useFavorites';

function ImagesFavourites() {
  const [favourites, changeFavourites] = useFavourites();
  const images = Object.values(favourites);

  return (
    <div className="App">
      <ImagesGallery images={images} handleChangeFavourites={changeFavourites} />
    </div>
  );
}

export default ImagesFavourites;
