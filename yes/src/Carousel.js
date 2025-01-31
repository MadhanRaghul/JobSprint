import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = ['/carou1.jpg', '/carou2.jpg', '/carou3.jpg']

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="carousel-image" />
        ))}
      </div>
    </div>
  )
}

export default Carousel;
