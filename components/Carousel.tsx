'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
      images: string[]; // Array of image URLs
      interval?: number; // Optional interval for automatic image change (in milliseconds)
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

      // Automatically change images after the interval
      useEffect(() => {
            const timer = setInterval(() => {
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);

            return () => clearInterval(timer); // Cleanup on unmount
      }, [images.length, interval]);

      const goToNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const goToPrevious = () => {
            setCurrentIndex(
                  (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
      };

      return (
            <div className="relative w-full h-full overflow-hidden">
                  {/* Carousel images */}
                  <div className="absolute inset-0 flex transition-all duration-500 ease-in-out">
                        {images.map((image, index) => (
                              <div
                                    key={index}
                                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                          }`}
                              >
                                    <img
                                          src={image}
                                          alt={`carousel-image-${index}`}
                                          className="object-cover w-full h-full"
                                    />
                              </div>
                        ))}
                  </div>

                  {/* Previous and Next buttons */}
                  <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-0 btn btn-ghost text-base-100"
                  >
                        &#8592;
                  </button>
                  <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-0 btn btn-ghost text-base-100"
                  >
                        &#8594;
                  </button>
            </div>
      );
};

export default Carousel;
