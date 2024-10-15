import React from 'react';
import './Page4.css'; // Add CSS for Page4
import DogImg3 from './Images/DogImg3.png'; // Replace with your image path
import DogImg4 from './Images/DogImg4.png'; // Card image 1
import DogImg5 from './Images/DogImg5.png'; // Card image 2
import DogImg6 from './Images/DogImg6.png'; // Card image 3
import DogImg7 from './Images/DogImg7.png'; // Card image 4

const Page4 = () => {
  return (
    <div className='pg4'>
      <div className='content'>
        <div className='textContain'>
          <p>Our Journey is just beginning. Explore <br />our roadmap to see the exciting <br />milestones and future plans we have in <br />store.</p>
          <p className='colorchange'>Join us as we grow and achieve new <br />heights.</p>
        </div>
        <img className='mapDog' src={DogImg3} alt={DogImg3} />
      </div>
      
      {/* Cards Section */}
      <div className='card-container'>
        <div className='card' style={{ backgroundColor: '#f0e1c1', color:'white', fontWeight:'bolder', fontSize:'20px' }}>
          <h3>Community <br/> Building <br/> and Initial launch</h3>
          <img src={DogImg4} alt='Dog Image 4' />
        </div>
        <div className='card' style={{ backgroundColor: '#c1e1f0', color:'white',fontWeight:'bolder', fontSize:'20px' }}>
          <h3>Merchandise <br/> Store launch</h3>
          <img src={DogImg5} alt='Dog Image 5' />
        </div>
        <div className='card' style={{ backgroundColor: '#f0c1c1', color:'white',fontWeight:'bolder', fontSize:'20px' }}>
          <h3>Community <br/> Events <br/> and contests</h3>
          <img src={DogImg6} alt='Dog Image 6' />
        </div>
        <div className='card' style={{ backgroundColor: '#c1f0c1', color:'white',fontWeight:'bolder', fontSize:'20px' }}>
          <h3>Expansion and <br/>New <br/>features</h3>
          <img src={DogImg7} alt='Dog Image 7' />
        </div>
      </div>
    </div>
  );
}

export default Page4;
