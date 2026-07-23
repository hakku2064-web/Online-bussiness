import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
 

  return (
    <>
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-brand'>
          <div className='footerlogo'>
            <h2>Shop Nepal</h2>
          </div>
          <p className='footer-tagline'>Wear Your Identity<br></br>
          Premium Nepali clothing crafted for comfort,<br></br> culture, and modern style.</p>
        <div className='social-links'>
          <a href="https://www.facebook.com/sandesh.rai.797495" aria-label='Facebook' className='social-icon'>Facebook</a><br></br>
          <a href='https://www.instagram.com/sandesh_rumdali/?hl=en' aria-label='Instagram'>Instagram</a>
        </div>
        </div></div>
        <div className='footer-column'>
          <ul>
            <li><Link to="/collection">Men</Link></li>
            <li><Link to="/about">Women</Link></li></ul></div>
            <div className='footer-column'>
              <h3>COMPANY</h3>
             <ul>
               <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about">Aboutus</Link></li>
            <li><Link to="/collection">collection</Link></li>
            <li><Link to="/collection">collection</Link></li>
             </ul>

            </div>
             <div className="footer-column">
          <h3>Customer Care</h3>
          <ul className="contact-info">
            <li> Thamel, Kathmandu, Nepal</li>
            <li> +977-1-4200000</li>
            <li> support@shopnepal.com</li>
            <li> Mon - Sat: 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
          </div>
        
        <div className='footer-button'>
          <p>@ 2026 Shop Nepal. All right reserved.</p>
          <div className='footer-legal'>
            <a href="#privacy">Cash On Delivary</a>
          <span className="dot">•</span>
          <a href="#terms">Terms of Service</a>
          <span className="dot">•</span>
          <a href="#shipping">Shipping & Delivery</a>
          </div>

        </div>
      

    </>
  )
}

export default Footer

