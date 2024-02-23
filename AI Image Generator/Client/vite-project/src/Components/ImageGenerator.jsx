import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/images', { description });
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
      <button onClick={generateImage}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated" />}
    </div>
  );
};

export default ImageGenerator;
