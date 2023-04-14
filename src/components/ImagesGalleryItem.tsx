import React from 'react';
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
  return (
    <ImageListItem>
      <img src={url} alt={alt} loading="lazy"></img>
      <ImageListItemBar
        sx={{ background: 'rgba(0,0,0, 0)' }}
        position="bottom"
        actionPosition="left"
        actionIcon={
          <IconButton onClick={handleChangeFavourites}>
            {!isInFavourites ? <StarBorderIcon htmlColor="gold" /> : <StarIcon htmlColor="gold" />}
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
