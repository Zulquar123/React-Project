import React from 'react'

export default function Mobile({ mobile }) {

    const { brand, model, price, imageLink } = mobile;
    
  return (
      <div>
          <div>
              <img src={imageLink} alt="" />
          </div>
          <h1>{ brand}</h1>
          <h2>{model}</h2>
          <h3>{ price}</h3>
          
    </div>
  )
}
