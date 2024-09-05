import React from 'react'
import './style.css'

export const Cart = ({cart , handleRemoveCart}) => {
  return (
      <div className='cartmain'>
          <h6>Items in the Cart : {cart.length}</h6>  
          <div className='cartContainer'>
              {
                  cart.map(mobile => 
                      <div key={mobile.id}><img src={mobile.imageLink}></img>
                      <button onClick={()=>handleRemoveCart(mobile.id)}>Remove</button>
                      </div>
                  )
                  
              }
              
          </div>
   
      </div>
  )
}
