import React from 'react';
import './Page5.css';
import DogImg8 from './Images/DogImg8.png';

const Page5 = () => {
  return (
    <div className='pg5'>
      <h2><span>TOKENOMICS</span></h2>
      <div className='tokensContainer'>
        <div className='tokens'>
          <div className='tkn'>
            <p>LIQUIDITY</p>
            <h3>LOCKED</h3>
          </div>
          <div className='tkn'>
            <p>CONTRACT</p>
            <h3>RENOUNCED</h3>
          </div>
          <div className='tkn'>
            <p>TAXES</p>
            <h3>0%</h3>
          </div>
        </div>
        <img src={DogImg8} alt='DogImg8' />
      </div>
    </div>
  );
};

export default Page5;
