import React from 'react';
import { Link } from 'react-router-dom';
import { useImages } from '../hooks/useImages';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { useFavourites } from '../hooks/useFavorites';
import { ImagesGallery } from '../components/ImagesGallery';
import Container from '@mui/material/Container';

function ImagesSearch() {
  const { search, images, handleSearch } = useImages();
  const [, changeFavourites] = useFavourites();

  return (
    <div className="App">
      <div
        style={{
          height: !images.length ? '100vh' : '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'height 1s ease-out',
        }}
      >
        <Container>
          <div className="searchContainer">
            <TextField
              label="Search Images"
              placeholder="Lions"
              value={search}
              onChange={handleSearch}
              fullWidth
            />
            <Link to="/favourites">
              <IconButton>
                <FolderSpecialIcon />
              </IconButton>
            </Link>
          </div>
        </Container>
      </div>
      {images.length && <ImagesGallery images={images} handleChangeFavourites={changeFavourites} />}
    </div>
  );
}
export default ImagesSearch;
