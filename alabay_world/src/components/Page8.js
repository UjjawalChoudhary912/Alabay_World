import React from 'react';
import './Page8.css';
import img1 from './Images/pg8Images/img1.png';
import img2 from './Images/pg8Images/img2.png';
import img3 from './Images/pg8Images/img3.png';
import telegram from './Images/telegram.png';
import twitter from './Images/twitter.png';
import DogImg9 from './Images/DogImg9.png';
import message from './Images/message.png';
import rightArrow from './Images/right-arrow.png';

const Page8 = () => {
  return (
    <div className='pg8'>
      <h3 className='para'>GAME <span className='highlight'>PREVIEWS</span></h3>
      <div className='imgContainer'>
        <img className='gprev' src={img1} alt='gprev1' />
        <img className='gprev' src={img2} alt='gprev2' />
        <img className='gprev' src={img3} alt='gprev3' />
        <img src={rightArrow} alt='right arrow' className='right-arrow-imag' />
      </div>
      <h1>SOCIAL MEDIA <br />LINKS</h1>
      <div className='img-contain'>
        <div className='message-container'>
          <img className='message' src={message} alt='message' />
          <div className='logo-container'>
            <div className='logo-item'>
              <img className='logo' src={twitter} alt='twitter' />
              <span className='link-text'>Twitter link</span>
            </div>
            <div className='logo-item'>
              <img className='logo' src={telegram} alt='telegram' />
              <span className='link-text'>Telegram link</span>
            </div>
          </div>
        </div>
        <img className='dogimg' src={DogImg9} alt='DogImg9' />
      </div>
    </div>
  );
};

export default Page8;
