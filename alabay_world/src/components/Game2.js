import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Game2dull from './Images/pg7Images/Game2dull.png';
import './Game2.css'; // Import the CSS file
import playButton from './Images/play-button.png'; 
import pic1 from './Images/Game-2pics/pic1.png'; 
import pic2 from './Images/Game-2pics/pic2.png'; 
import pic3 from './Images/Game-2pics/pic3.png';

const Game2 = () => {
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

  const handleExitClick = () => {
      navigate('/'); // Navigate to the home page or another page on exit
  };

  return (
    <div className="game2-full-screen"> 
      <h1 className="main-title small-title">ALABAY HERITAGE</h1>
      <h2 className="subtitle">THE LOST ADVENTURE</h2>
      <p className="description">
          Take on the role of the Legendary Alabay on a <br />
          quest to uncover the ancient secrets of its <br />
          ancestors.
      </p>
      <button className="playy-button">
          <img src={playButton} alt="Play" className="play-icon" />
          PLAY
      </button>
      <h3><span>GAME</span> PREVIEW</h3>
      <div className="image-container">
          <img src={pic1} alt='pic1' className="preview-image" />
          <img src={pic2} alt='pic2' className="preview-image" />
          <img src={pic3} alt='pic3' className="preview-image" />
      </div>
      <h2 className='feature'>FEATURES</h2>
      <ul className="features-list">
          <li>Explore a variety of landscapes, including <span>mountains, forests, deserts,</span> and <span>ancient ruins.</span></li>
          <li>Use the Alabay's <span>abilities</span> to solve <span>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden <br /> clues.</li>
          <li>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the <br /> breed's role in ancient history.</li>
          <li>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</li>
          <li>Challenge Modes:
              <ul>
                  <li><span>Time Trials:</span> Compete in special timed challenges where the Alabay must navigate through complex mazes or <br /> complete puzzles within a time limit.</li>
                  <li><span>Exploration Mastery:</span> A mode that rewards players for fully exploring every nook and cranny of the game's world, <br /> uncovering all secrets.</li>
              </ul>
          </li>
      </ul>
      {/* Play and Exit Buttons */}
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

export default Game2;
