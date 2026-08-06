import React from 'react'
import { Link } from 'react-router'
import '../css/aboutus.css'
function About() {
  return (
    <div className="about-page">
      <div className='top-container'>
        <div className='left-content' >
          <p>OUR STORY</p>
          <d2>Wear Your Identity</d2>
          <p>Shopify is a premium Nepali clothing store built areound comfort, culture, and everyday confidence. </p>
          <div className='btn-class'>
           <Link to="/collection"> <button className='explore'>Explore collection</button></Link>
           <Link to="/contact"> <button className='explore'>Contact</button></Link>
          </div>
        </div>
        <div className='right-content'>
          <img src='https://i.pinimg.com/736x/2a/84/a8/2a84a8a4001731609b4b01d23acd1f45.jpg' className='top-img'></img>
          </div>
       </div>

       <div className='middle-container'>
        <div className='left-image'>
          <img src="https://res.cloudinary.com/dpguydliv/image/upload/v1782411308/Pahiran/about/qemkyfbldxf9qsr0wmdd.png" className='middle-img'></img>
        </div>
      <div className='mid'>
          <div className='middle-right-content'>
          <p>BRAND STORY</p>
          <h1>Modern Clothing Rooted in Nepali Elegance</h1>
          <p>From everyday wear to festive looks, Shopify brings style closer to you through clean, design, wearable fabrics, and details that respect Nepali identity </p>

          <div className='quote-box'>
            We believe clothing should feel like identity, not just fabric.
          </div>
        </div>
      </div>

      <div>
        
      </div>

       </div>
    </div>
  )
}

export default About
