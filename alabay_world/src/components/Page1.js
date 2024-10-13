import React from 'react'
import DogImg1 from "./Images/DogImg1.png"
import './Page1.css'

const page1 = () => {
  return (
    <div className='pg1'>
         <img className='jumpingDog' src={DogImg1} alt={DogImg1}/>
         <div className='textContainer'>
        <h2>History of <span>ALABAY</span></h2>
       
        <p>The Central Asian Shepherd Dog,<br/> also known as Alabay, has been a <br/>guardian of livestock and property <br/>for centuries. Originating from <br/> Central Asia, these dogs are <br/> renowned for their courage,<br/> strength, and loyalty.</p>
      </div>
    </div>
  )
}

export default page1;
