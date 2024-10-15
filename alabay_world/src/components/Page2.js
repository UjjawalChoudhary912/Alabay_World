import React, { useRef, useState } from 'react';
import './Page2.css';
import DogImg4 from './Images/DogImg4.png';
import DogImg5 from './Images/DogImg5.png';
import DogImg6 from './Images/DogImg6.png';
import DogImg7 from './Images/DogImg7.png';
import video1 from './videos/video1.mov';
import video2 from './videos/video2.mp4';
import video3 from './videos/video3.mp4';
import rightArrow from './Images/right-arrow.png'; // Custom right arrow image

const Page2 = () => {
    const scrollRef = useRef(null);
    const [filter, setFilter] = useState('All');

    const scroll = () => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth; // Scroll by the width of the container
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // Check if the scroll position is at the end
            if (scrollRef.current.scrollLeft + scrollAmount >= scrollRef.current.scrollWidth) {
                // Reset scroll position to the start
                scrollRef.current.scrollLeft = 0;
            }
        }
    };

    const mediaItems = [
        { type: 'Photo', src: DogImg4, isVideo: false },
        { type: 'Video', src: video1, isVideo: true },
        { type: 'Photo', src: DogImg5, isVideo: false },
        { type: 'Video', src: video2, isVideo: true },
        { type: 'Photo', src: DogImg6, isVideo: false },
        { type: 'Video', src: video3, isVideo: true },
        { type: 'Photo', src: DogImg7, isVideo: false },
    ];

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
                <img 
                    src={rightArrow} 
                    alt='right arrow' 
                    className="scroll-arrow right-arrow" 
                    onClick={scroll} 
                />
            </div>

            <h1>PROJECT VISION</h1>
        </div>
    );
};

export default Page2;
