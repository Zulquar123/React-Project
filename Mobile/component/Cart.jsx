import React from 'react'
import './style.css'

export const Cart = ({cart}) => {
  return (
      <div className='cartmain'>
          <h6>Items in the Cart : {cart.length}</h6>  
          <div className='cartContainer'>
              {
                  cart.map(mobile => <img src={mobile.imageLink}></img>)
              }
              
          </div>
   
      </div>
  )
}
