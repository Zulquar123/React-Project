import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';
import './style.css'

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [cart, setCart] = useState([]);
  useState(() => {
    fetch('mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])
  

  const handleCart = mobile => {
    alert("Mobile Added to the Cart");
    const newCart = [...cart, mobile];
    setCart(newCart);
    alert(`Total Items in the Cart : ${cart.length+1}`);
}

  return (

    <div className='card'>
      <h6>Items in the Cart : { cart.length}</h6>
      {
      
        mobiles.map((mobile, index) => <Mobile
          mobile={mobile}
          key={index}
          handleCart={handleCart}
        ></Mobile>)
      
      }
    </div>
    
  )
}
