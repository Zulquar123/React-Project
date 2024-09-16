import React, { useState } from 'react'

export default function State() {

  const [value, setValue] = useState(20);
  const [bool, setBool] = useState(true);
  const [obj, setObj] = useState({ name: "zulquar", age: 32 });
  
  return (
    <div className='m-10'>

      <h1 className='text-xl'>The Value is : {value} </h1>
      <button className='border-2 border-black rounded px-2' onClick={() => setValue((pre) => pre + 1)}>Get Value</button> 
      <hr />
      
      <h1 className='text-xl'>The Value is : {bool.toString()}</h1>
      <button className='border-2 border-black rounded px-2' onClick={() => setBool(!bool)}> Get Value</button>
      <hr />

      <h1 className='text-xl'>Name : {obj.name} and Age : {obj.age}</h1>
      <button className='border-2 border-black rounded px-2' onClick={()=> setObj({...obj , age:35})}>Update Details</button>
    </div>
  )
}









