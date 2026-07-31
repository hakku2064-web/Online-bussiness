import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
      
        <div className="footer-brand">
          <div className="footer-logo">
            <h2>Shop Nepal</h2>
          </div>
          <p className="footer-tagline">
            Wear Your Identity.<br />
            Premium Nepali clothing crafted for comfort, culture, and modern style.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/sandesh.rai.797495" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">Facebook</a>
            <a href="https://www.instagram.com/sandesh_rumdali/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">Instagram</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li><Link to="/collection">Men's Collection</Link></li>
            <li><Link to="/collection">Women's Collection</Link></li>
            <li><Link to="/collection">New Arrivals</Link></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/collection">Collection</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <ul className="contact-info">
            <li> Thamel, Kathmandu, Nepal</li>
            <li> +977-1-4200000</li>
            <li> support@shopnepal.com</li>
            <li> Mon - Sat: 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Shop Nepal. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#delivery">Cash On Delivery</a>
          <span className="dot">•</span>
          <a href="#terms">Terms of Service</a>
          <span className="dot">•</span>
          <a href="#shipping">Shipping & Delivery</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer


