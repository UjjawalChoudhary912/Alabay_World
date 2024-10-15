import React from 'react'
import './Page3.css'
import DogImg2 from './Images/DogImg2.png'

const page3 = () => {
  return (
    <div className='pg3'>
       <img className='manydogs' src={DogImg2} alt={DogImg2}/>
       <p>Our Mission is to honor the heritage of Alabay by creating a vibrant, loyal and <br/> powerful community. Just as the Alabay protects its flock, we aim to build a pack that <br/> stands strong together.</p>
       <h2><span>ROAD MAP</span></h2>
    </div>
  )
}

export default page3