import React from 'react';
import { Link } from 'react-router-dom';
import { useImages } from '../hooks/useImages';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { useFavourites } from '../hooks/useFavorites';

function ImagesSearch() {
  const { search, images, handleSearch } = useImages();
  const [, changeFavourites] = useFavourites();

  return (
    <div className="App">
      <div>
        <TextField
          label="Search Image"
          placeholder="Lions"
          value={search}
          onChange={handleSearch}
        />
        <Link to="/favourites">
          <IconButton>
            <FolderSpecialIcon />
          </IconButton>
        </Link>
      </div>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img key={image.id} src={image.webformatURL} alt={image.tags}></img>
            <IconButton
              onClick={() => {
                // will use image.user_id and image.id for a key for favourites
                const imageId = `${image.user_id}-${image.id}`;
                changeFavourites(imageId, image);
              }}
            >
              <StarBorderIcon />
            </IconButton>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
export default ImagesSearch;
