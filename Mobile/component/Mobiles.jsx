import React, { useEffect, useState } from 'react'

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  useState(() => {
    fetch('mobiles.json')
      .then(res => res.json())
      .then(data => setMobiles(data))
  } , [])










  return (
    <div>

      <h1>No. Of Mobiles : {mobiles.length}</h1>
    </div>
  )
}
