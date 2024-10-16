import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Game1.css'; 
import playButton from './Images/play-button.png'; 
import pic1 from './Images/Game-1pics/pic1.png'; 
import pic2 from './Images/Game-1pics/pic2.png'; 
import pic3 from './Images/Game-1pics/pic3.png'; 
import pic4 from './Images/Game-1pics/pic4.png'; 

const Game1 = () => {
    const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

    const handleExitClick = () => {
        navigate('/'); // Navigate to the home page or another page on exit
    };

    return (
        <div className="game1-container">
            <h1 className="main-title small-title">ALABAY Guardian</h1>
            <h2 className="subtitl">SHEPHERD OF THE STEPPES</h2>
            <p className="description">
                Take on the role of the Legendary Alabay on a <br />
                quest to uncover the ancient secrets of its <br />
                ancestors.
            </p>
            <div className="image-container">
                <img src={pic1} alt='pic1' className="preview-image" />
                <img src={pic2} alt='pic2' className="preview-image" />
                <img src={pic3} alt='pic3' className="preview-image" />
                <img src={pic4} alt='pic4' className="preview-image" />
            </div>
            <h2 className='featur'>FEATURES</h2>
            <ul className="features-list">
                <li>Explore a variety of landscapes, including <span className='SPAN'>mountains, forests, deserts,</span> and <span className='SPAN'>ancient ruins.</span></li>
                <li>Use the Alabay's <span className='SPAN'>abilities</span> to solve <span className='SPAN'>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden <br /> clues.</li>
                <li>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the <br /> breed's role in ancient history.</li>
                <li>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</li>
                <li>Challenge Modes:
                    <ul>
                        <li><span className='SPAN'>Time Trials:</span> Compete in special timed challenges where the Alabay must navigate through complex mazes or <br /> complete puzzles within a time limit.</li>
                        <li><span className='SPAN'>Exploration Mastery:</span> A mode that rewards players for fully exploring every nook and cranny of the game's world, <br /> uncovering all secrets.</li>
                    </ul>
                </li>
            </ul>

            <div className="action-buttons">
                <button className="play-action-button">
                    <img src={playButton} alt="Play" className="play-action-icon" />
                    PLAY
                </button>
                <button className="exit-action-button" onClick={handleExitClick}>
                    EXIT
                </button>
            </div>
        </div>
    );
};

export default Game1;
