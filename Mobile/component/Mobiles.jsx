import React, { useEffect, useState } from 'react'
import Mobile from './Mobile';

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  useState(() => {
    fetch('mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  } , [])

  return (
    <div>
      <h2>{
      
        mobiles.map((mobile,index)=> <Mobile mobile={mobile} key={index}></Mobile>)
      
      }</h2>
    </div>
  )
}
