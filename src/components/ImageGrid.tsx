import React, { useEffect, useState } from 'react';

interface ImageGridProps {
  imageCount: number;
  interval: number;
}

const ImageGrid: React.FC<ImageGridProps> = ({ imageCount, interval }) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const newImages = Array.from({ length: imageCount }, () => `https://picsum.photos/200?random=${Math.random()}`);
    setImages(newImages);
  };

  useEffect(() => {
    fetchImages();

    const intervalId = setInterval(fetchImages, interval);
    return () => clearInterval(intervalId);
  }, [imageCount, interval]);

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;