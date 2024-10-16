import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Page7.css';
import Game1 from './Images/pg7Images/Game1.png';
import Game2 from './Images/pg7Images/Game2.png';
import rightArrow from './Images/right-arrow.png';

const Page7 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation
    const games = [Game1, Game2];

    // Function to handle manual image scroll
    const scrollNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    };

    // Auto slide every 2 seconds
    useEffect(() => {
        const autoSlide = setInterval(() => {
            scrollNext();
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
    }, [currentIndex]);

    // Handle navigation based on the current image
    const handleDiscoverClick = () => {
        if (currentIndex === 0) {
            navigate('/game1'); // Navigate to Game1.js if the first image is showing
        } else if (currentIndex === 1) {
            navigate('/game2'); // Navigate to Game2.js if the second image is showing
        }
    };

    return (
        <div className='pg7'>
            <h2 className='game'><span>GAMES</span></h2>
            <p>Stay Tuned for upcoming Games!</p>
            <div className="scroll-container">
                <div className="image-container">
                    <img className='imgs' src={games[currentIndex]} alt={`Game ${currentIndex + 1}`} />
                    <button onClick={handleDiscoverClick} className="discover-button">
                        DISCOVER
                    </button>
                    <img
                        src={rightArrow}
                        alt='right arrow'
                        className='right-arrow-image'
                        onClick={scrollNext} // Scroll to the next image manually
                    />
                </div>
            </div>
        </div>
    );
};

export default Page7;
