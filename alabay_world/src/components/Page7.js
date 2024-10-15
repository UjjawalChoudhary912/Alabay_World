import React, { useRef, useState } from 'react';
import './Page7.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Game1 from './Images/pg7Images/Game1.png';
import Game2 from './Images/pg7Images/Game2.png';

const Page7 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const games = [Game1, Game2];

    const scroll = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === 'left') {
                return (prevIndex - 1 + games.length) % games.length;
            } else {
                return (prevIndex + 1) % games.length;
            }
        });
    };

    return (
        <div className='pg7'>
            <h2><span>GAMES</span></h2>
            <p>Stay Tuned for upcoming Games!</p>
            <div className="scroll-container">
                <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <img src={games[currentIndex]} alt={`Game ${currentIndex + 1}`} />
                <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default Page7;
