import React, { useState } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface ImagesGalleryItemProps {
  url: string;
  alt: string;
  isInFavourites: boolean;
  handleChangeFavourites: () => void;
}

export function ImagesGalleryItem({
  url,
  alt,
  isInFavourites,
  handleChangeFavourites,
}: ImagesGalleryItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <ImageListItem>
      <img src={url} alt={alt} loading="lazy" onLoad={() => setImageLoaded(true)}></img>
      <ImageListItemBar
        sx={{ background: 'rgba(0,0,0, 0)' }}
        position="bottom"
        actionPosition="left"
        actionIcon={
          imageLoaded && (
            <IconButton onClick={handleChangeFavourites}>
              {!isInFavourites ? (
                <StarBorderIcon htmlColor="gold" />
              ) : (
                <StarIcon htmlColor="gold" />
              )}
            </IconButton>
          )
        }
      />
    </ImageListItem>
  );
}
