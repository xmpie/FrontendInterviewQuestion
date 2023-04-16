import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ImagesGallery } from '../components/ImagesGallery';
import { useFavourites } from '../hooks/useFavorites';

function ImagesFavourites() {
  const [favourites, changeFavourites] = useFavourites();
  const images = Object.values(favourites);

  return (
    <div className="App">
      <Container>
        <div style={{ padding: '10px 0 0' }}>
          <Link to="/">
            <IconButton size={'large'}>
              <HomeIcon htmlColor="black" />
            </IconButton>
          </Link>
        </div>
        {images.length ? (
          <ImagesGallery images={images} handleChangeFavourites={changeFavourites} />
        ) : (
          <Typography variant="h5" align="center">
            No Favorites for now
          </Typography>
        )}
        {}
      </Container>
    </div>
  );
}

export default ImagesFavourites;
