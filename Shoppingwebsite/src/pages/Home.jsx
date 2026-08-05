import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/sky.jpg';
import img2 from "../assets/cloth store.jpg";
import Productcard from '../components/ui/Productcard';
import '../css/home.css';

function Home() {
  const [currentImage, setCurrentImage] = useState(2);
  const images = [img1, img2, "https://res.cloudinary.com/dpguydliv/image/upload/v1782411132/Pahiran/admin/l8ojhnwjmsrhjjbvuuvf.png"];
  function nextimage() {
    setCurrentImage((prev) => (prev + 1) % images.length)
  };
  function previousimage() {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className='home'>

      <div className='background'>


        <div className="hero-section" style={{
          backgroundImage: `url(${images[currentImage]})`,

        }}>
          <div><button onClick={nextimage}>  next</button></div>
          <h1>Welcome to Shop Nepal</h1>
          <p>Discover authentic Nepali products, handcrafted goods, clothing, and vibrant collections.</p>
          <div className='firstbuttons'>
            <Link to="/collection"><button className='btn'>SHOP COLLECTION</button></Link>
            <Link to="about"><button className='btn'>About us</button></Link>
          </div>
        </div>


      </div>
      <div className='middle-part'>
        <h3>Browse</h3>
        <h2>Our Categories</h2>
        <p>Explore timeless cloting made for ecery occasion</p>
        <div className='div-btn'>   
          <button className='btn-1'><Link to="/collection">Women</Link></button>

          <button className='btn-1'><Link to="/collection">Men</Link></button>
        </div>


        <p>JUST IN</p>
        <h4>New Arrivals</h4>

        <p>Fresh styles designed for comfort, confidence, and culture.</p></div>
      <section>
        <div><Productcard /></div>
        <h2>Why Shop With Us?</h2>

        <div>
          <div>
            <h3>Premium Quality</h3>
            <p>Every product is carefully selected for quality.</p>
          </div>

          <div>
            <h3>Fast Delivery</h3>
            <p>Nationwide delivery across Nepal.</p>
          </div>

          <div>
            <h3>Easy Returns</h3>
            <p>Simple and hassle-free return process.</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Stay in the Loop</h2>
        <p>Subscribe for exclausive precious, new arrivals.</p>

        <input type="email" required placeholder='Enter your email'></input>
      </section>


    </div>
  )
}

export default Home
