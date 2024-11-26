'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
    images: string[]; // Array of image URLs to display in the carousel
    autoSlideInterval?: number; // Optional interval for auto-slide in milliseconds (default is 5000ms)
}

const Carousel: React.FC<CarouselProps> = ({ images, autoSlideInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inTransition, setInTransition] = useState(false); // Track if transition is happening

    // Function to go to the previous slide
    const goToPrevSlide = () => {
        setInTransition(true); // Start the transition
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const goToNextSlide = () => {
        setInTransition(true); // Start the transition
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to go to a specific slide (based on indicator click)
    const goToSlide = (index: number) => {
        setInTransition(true); // Start the transition
        setCurrentIndex(index);
    };

    // Set up auto-sliding every `autoSlideInterval` milliseconds
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, autoSlideInterval);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [autoSlideInterval]);

    // Wait for the transition to end, then allow the next slide change
    useEffect(() => {
        if (inTransition) {
            const timeoutId = setTimeout(() => {
                setInTransition(false); // Transition complete, allow next action
            }, 1000); // Duration matches the transition time (1000ms)

            return () => clearTimeout(timeoutId); // Clean up timeout
        }
    }, [inTransition]);

    return (
        <div className="relative h-72 w-96 scale-150 overflow-hidden duration-100 rounded-md shadow-lg">
            {/* Carousel Images */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`} // Only show active image with opacity-100, others are opacity-0
                    />
                ))}
            </div>

            {/* Previous Button */}
            <button
                onClick={goToPrevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 btn-circle btn-ghost duration-100"
            >
                &#60;
            </button>

            {/* Next Button */}
            <button
                onClick={goToNextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 btn-circle btn-ghost duration-100"
            >
                &#62;
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 duration-200 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-secondary'}`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
