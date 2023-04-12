import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Container from '@mui/material/Container';
import { useFavourites } from '../hooks/useFavorites';
import { getImageId } from '../utils/getImageId';

interface ImagesGalleryProps {
  images: Record<string, any>[];
  handleChangeFavourites: (key: string, image: Record<string, any>) => void;
}

export function ImagesGallery({ images, handleChangeFavourites }: ImagesGalleryProps) {
  const [favourites] = useFavourites();
  return (
    <Container>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => {
          const isInFavourites = favourites.hasOwnProperty(getImageId(image));
          return (
            <ImageListItem key={image.id}>
              <img key={image.id} src={image.webformatURL} alt={image.tags}></img>
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                }}
                onClick={() => {
                  const key = getImageId(image);
                  handleChangeFavourites(key, image);
                }}
              >
                {isInFavourites ? (
                  <StarBorderIcon htmlColor="gold" />
                ) : (
                  <StarIcon htmlColor="gold" />
                )}
              </IconButton>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}
