import React, { useState, useEffect } from 'react';
import "./Page6.css";
import blackHoodiebck from './Images/Alabay Merch/black hoodie bck.png';
import blackHoodie from './Images/Alabay Merch/black hoodie.png';
import blueCapbck from './Images/Alabay Merch/blue cap bck.png';
import blueCap from './Images/Alabay Merch/cap mockup.png';
import pinkTeebck from './Images/Alabay Merch/pink tee bck.png';
import pinkTee from './Images/Alabay Merch/pink tshirt.png';
import yellowTeebck from './Images/Alabay Merch/yellow tee bck.png';
import yellowTee from './Images/Alabay Merch/yellow tshirt.png';

const Page6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const merchandise = [
    { bck: blackHoodiebck, front: blackHoodie },
    { bck: blueCapbck, front: blueCap },
    { bck: pinkTeebck, front: pinkTee },
    { bck: yellowTeebck, front: yellowTee },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % merchandise.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + merchandise.length) % merchandise.length);
  };

  useEffect(() => {
    if (!isAutoSliding) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isAutoSliding, currentSlide]);

  const handleNext = () => {
    setIsAutoSliding(false); // Stop auto sliding
    nextSlide();
  };

  const handlePrev = () => {
    setIsAutoSliding(false); // Stop auto sliding
    prevSlide();
  };

  return (
    <div className='pg6'>
      <h1>MERCHANDISE</h1>
      <div className='slider'>
        <button className='prev' onClick={handlePrev}>&lt;</button>
        <div className='merch-item'>
          <img className='bck-image' src={merchandise[currentSlide].bck} alt='Background' />
          <img className='front-image' src={merchandise[currentSlide].front} alt='Merchandise' />
        </div>
        <button className='next' onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Page6;
