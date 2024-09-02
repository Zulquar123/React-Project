import React from 'react'
import './style.css'


export default function Mobile({ mobile }) {

    const { brand, model, price, imageLink } = mobile;
    
    return (
      
      <div className='mobile'>
        
               <img src={imageLink} alt="" className='img' />
          
                        <h1 className='font'>Brand : {brand}</h1>
                        <h2 className='font'>Model : {model}</h2>
                        <h3 className='font'>Price : {price}</h3>
                
        </div>
    
  )
}
