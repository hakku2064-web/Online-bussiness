import React from 'react'
import productdetail from '../../data/productdetail'
import "../ui/productcard.css"
import { Link } from 'react-router'

function Productcard() {
function buyNow(){
    alert("added to cart")
}


  return (
    
       <>
       <div className='product-grid'>  
        {productdetail.map((productss)=>
            (<div key={productss.id} className='product-card'>
                
                <div className='product-image-container'>
                   <Link to={`product/${productss.id}`}>
                    <img src={productss.image} className='product-image' />
                    </Link>
                    </div>
                <div className='product-info'>
                    <p className='product-title'>{productss.name}</p>
                    <div className='product-price'>
                     <div className='price'>
                           <span className='current-price'>Rs. {productss.afterdiscounted}</span>
                        {productss.price > productss.afterdiscounted && 
                        (<span className='original-price'>Rs. {productss.price}</span>

                        )}
                     </div>
                    <div>  <p>The available size are{productss.size}</p></div>
                    </div>
                    <button className='buy-btn' onClick={buyNow}>Add to Cart</button>
                </div>
              
            </div>)
        ) }
        </div>
       </>
    
  )
}

export default Productcard