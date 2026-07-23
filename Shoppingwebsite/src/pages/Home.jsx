import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hero.jpg";
import Productcard from '../components/ui/Productcard';

function Home() {
  
  return (
    <>
    <div className='home' style={{backgroundImage: `url(${hero})` }}>
    <div  >
      <section className="hero-section">
        <h1>Welcome to Shop Nepal</h1>
        <p>Discover authentic Nepali products, handcrafted goods, clothing, and vibrant collections.</p>
        
      </section>
    </div>
    <div>
      <Link to="/collection"><button>SHOP COLLECTION</button></Link>
      <Link to="about"><button>About us</button></Link>
    </div>
    </div>
    <div><h2>Our Categories</h2>
    <p>Explore timeless cloting made for ecery occasion</p>
    <button>Women</button>

    <button>Men</button></div><br></br>
    <p><Productcard/></p>
    <p>JUST IN</p>
    <h4>New Arrivals</h4>
    <p>Fresh styles designed for comfort, confidence, and culture.</p>
 <section>
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
 <section>
  <div>

  </div>
 </section>
    </>
  )
}

export default Home
