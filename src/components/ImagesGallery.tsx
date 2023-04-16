import React from 'react';
import ImageList from '@mui/material/ImageList';
import { ImagesGalleryItem } from './ImagesGalleryItem';
import { useFavourites } from '../hooks/useFavorites';
import { getImageId } from '../utils/getImageId';

interface ImagesGalleryProps {
  images: Record<string, any>[];
  handleChangeFavourites: (key: string, image: Record<string, any>) => void;
}

export function ImagesGallery({ images, handleChangeFavourites }: ImagesGalleryProps) {
  const [favourites] = useFavourites();
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((image) => {
        const isInFavourites = favourites.hasOwnProperty(getImageId(image));
        const key = getImageId(image);
        return (
          <ImagesGalleryItem
            url={image.webformatURL}
            alt={image.tags}
            handleChangeFavourites={() => {
              handleChangeFavourites(key, image);
            }}
            isInFavourites={isInFavourites}
          />
        );
      })}
    </ImageList>
  );
}
