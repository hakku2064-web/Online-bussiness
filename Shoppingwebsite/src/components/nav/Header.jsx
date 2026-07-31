import React from 'react'
import { Link } from 'react-router-dom'
import "./navStyle.css"
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
        <h1>Shop Nepal</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav></div>
    </header>
  )
}

export default Header
