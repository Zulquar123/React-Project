import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';
import './style.css'

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  useState(() => {
    fetch('mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  } , [])

  return (
   
      <div className='flex flex-wrap justify-center items-center'>
      {
      
        mobiles.map((mobile, index) => <Mobile mobile={mobile} key={index}></Mobile>)
      
      }
        </div>
    
  )
}
