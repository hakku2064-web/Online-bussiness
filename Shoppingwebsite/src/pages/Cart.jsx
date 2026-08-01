import React from 'react'
import kurtha from '../assets/kurtha1.jpg'
import { useState } from 'react'
import '../css/cart.css'
function Cart() {

    
    const itemprice=1400;
    const [initialCount, setinitialcount]=useState(0)
    function add(){
        setinitialcount(initialCount +1)
    }
    function sub(){
        if(initialCount >0){
            setinitialcount(initialCount -1)
        }
    }
    const subtotal=initialCount * itemprice;
    function checkout(){
        alert(`Total ${initialCount} item bought of Rs. ${subtotal}`)
    }
  return (
 <div className='cart-head'>
       <div className='cart-page'>
        <h1 className='cart-heading'>Shooping Cart</h1>
        <div className='cart-container'>
            <div className='cart-item-list'>
                <div className='item-cart'>
                    <img src={kurtha} alt='Kurtha' className='cart-image'></img>
                <div className='cart-detail'>
                    <h3>Kurtha</h3>
                    <p className='price'>Rs. {itemprice} </p>

                </div>
                <div className='quantity-control'>
                    <div className="quantity-controls">
                    <button className="qtn-btn" onClick={sub}>-</button>
                    <button className='qtn-btn'>{initialCount}</button>
                    <button className="qtn-btn" onClick={add}>+</button>
                </div>
                <div className='item-subtotal'>
                    Rs. {subtotal}
                </div>
                </div>
            </div>
        </div>

        <div className='order-summary'>
            <h2> Order of summary</h2>
            <div className='summary-item'>
                <span>Total item: </span>
                <span>Rs.{initialCount}</span>
            </div>
            <div className='total'>
                <span>Total price: </span>
                <span>Rs.{subtotal}</span>
            </div>
            <button onClick={checkout} className='checkout-btn'>Proceed to Checkout</button>
        </div>

    </div>
    
    </div>
  
 </div>
   
     
   
  )
}

export default Cart