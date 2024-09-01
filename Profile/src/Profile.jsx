import React from 'react'

export default function Profile() {

    const data = [
        {name:"Elon Musk",image:"https://i.redd.it/tm7ced4yniib1.jpg",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit reprehenderit explicabo voluptatum hic, blanditiis, obcaecati eaque ducimus itaque aperiam esse !"},
        {name:"Bill Gates",image:"https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit reprehenderit explicabo voluptatum hic, blanditiis, obcaecati eaque ducimus itaque aperiam esse !"},
        {name:"Lary Page",image:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit reprehenderit explicabo voluptatum hic, blanditiis, obcaecati eaque ducimus itaque aperiam esse !"},
        {name:"Jeff Bezoz",image:"https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit reprehenderit explicabo voluptatum hic, blanditiis, obcaecati eaque ducimus itaque aperiam esse !"},
        // {name:"Sundar Pachai",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/220px-Sundar_Pichai_-_2023_%28cropped%29.jpg",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure impedit reprehenderit explicabo voluptatum hic, blanditiis, obcaecati eaque ducimus itaque aperiam esse !"}   
    ];

  return (
    <div className='main bg-neutral-700 w-full h-screen flex justify-center items-center'>
          <div className=' px-2 container bg-neutral-500 w-max h-5/6 rounded-xl border-4 border-emerald-700 border-solid flex justify-center items-center'>

              {
                  data.map((value,index)=>(<div className='mx-1 profile container bg-neutral-100 w-72 h-5/6 rounded-xl border-4 border-orange-700 border-solid'>
                  <div className='bg-zinc-600 w-full h-1/4'></div>
                  <div className='flex justify-center items-center'>
                      <img src={value.image} alt="" className='rounded-full w-32 -mt-16' />
                  </div>    
                      <div className='text-3xl font-bold text-center'>{value.name}</div>
                  <div>
                          <p className='text-justify p-2  font-normal'>{value.desc}</p>
                  </div>

                  <div className='flex justify-center my-2 '>
                      <button className='border-2 border-solid	border-zinc-950 rounded-lg p-1 text-sm '>Contact me ➡️</button>
                  </div>  
              </div>))
              }

          </div>
    </div>
  )
}
