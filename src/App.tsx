import React from 'react';
import { useImages } from './hooks/useImages';
import './App.css';

function App() {
  const { search, images, handleSearch } = useImages();

  return (
    <div className="App">
      <div>
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      <div>
        {images.map((image) => (
          <img src={image.previewURL} alt={image.tags}></img>
        ))}
      </div>
    </div>
  );
}

export default App;
