import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Page2.css';
import DogImg4 from './Images/DogImg4.png';
import DogImg5 from './Images/DogImg5.png';
import DogImg6 from './Images/DogImg6.png';
import DogImg7 from './Images/DogImg7.png';
import video1 from './videos/video1.mov';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';

const Page2 = () => {
    const scrollRef = useRef(null);
    const [filter, setFilter] = useState('All'); // State to manage the filter

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Media items array
    const mediaItems = [
        { type: 'Photo', src: DogImg4, isVideo: false },
        { type: 'Video', src: video1, isVideo: true },
        { type: 'Photo', src: DogImg5, isVideo: false },
        { type: 'Video', src: video2, isVideo: true },
        { type: 'Photo', src: DogImg6, isVideo: false },
        { type: 'Video', src: video3, isVideo: true },
        { type: 'Photo', src: DogImg7, isVideo: false },
    ];

    // Filtered media based on the selected type
    const filteredMedia = mediaItems.filter(item => filter === 'All' || item.type === filter);

    return (
        <div className="pg2">
            <ul className="media-list">
                <li 
                    onClick={() => setFilter('All')} 
                    className={filter === 'All' ? 'active' : ''}
                >
                    All
                </li>
                <li 
                    onClick={() => setFilter('Photo')} 
                    className={filter === 'Photo' ? 'active' : ''}
                >
                    Photos
                </li>
                <li 
                    onClick={() => setFilter('Video')} 
                    className={filter === 'Video' ? 'active' : ''}
                >
                    Videos
                </li>
            </ul>

            <div className="media-container">
                <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="scrollable" ref={scrollRef}>
                    {filteredMedia.map((item, index) => (
                        <div className="media-item" key={index}>
                            {item.isVideo ? (
                                <video src={item.src} alt={`video${index + 1}`} controls preload="auto" />
                            ) : (
                                <img src={item.src} alt={`photo${index + 1}`} />
                            )}
                        </div>
                    ))}
                </div>
                <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <h1>PROJECT VISION</h1>
        </div>
    );
};

export default Page2;
