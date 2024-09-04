import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';
import './style.css'
import { addCart , getCart} from './storage';
import { Cart } from './cart';


export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  const [cart, setCart] = useState([]);
  useState(() => {
    fetch('mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])

  useEffect(() => {
    if (mobiles.length > 0)
    {
      const getkart = getCart();
      //console.log(getkart);
      const savekart = []; 
      for (const id of getkart) {
        const mobile = mobiles.find(mobile => mobile.id === id);
        if (mobile)
        {
          savekart.push(mobile);
          console.log(savekart);
        }
      }
      setCart(savekart);
    }
    
  },[mobiles])
  
  const handleStock = mobile => {
        alert("Stock Available");
}
  const handleCart = mobile => {
    // alert("Mobile Added to the Cart");
    const newCart = [...cart, mobile];
    setCart(newCart);
    addCart(mobile.id);
    // alert(`Total Items in the Cart : ${cart.length+1}`);    
}

  return (
    <>
    <Cart cart={cart}> </Cart>
    <div className='card'> 
      {    
        mobiles.map((mobile, index) => <Mobile
          mobile={mobile}
          key={index}
          handleCart={handleCart}
          handleStock={handleStock}
        ></Mobile>)     
      }
    </div>
    </>
  )
}
