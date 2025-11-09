import React, { useState } from 'react'

function BgChanger() {
    const [color,setColor]=useState('gray')

const colors = [
  "Crimson",
  "limegreen",
  "royalblue",
  "gold",
  "Mediumorchid",
  "Teal",
  "Darkorange",
  "Tomato",
  "Green",
  "Blue",
 
];

  return (
    <div className='w-full h-screen decoration-200' style={{background:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-amber-50 rounded-2xl mx-4 '>
          <div className='flex flex-wrap justify-center gap-3 bg-white text-center shadow-blue-400'>
            {colors.map((e)=>( <button onClick={()=>setColor(e)} style={{backgroundColor:e}} className='text-white text-1xl rounded-2xl px-5 m-2 py-2'>{e}</button>))}
           
          </div>
        </div>




    </div>
  )
}

export default BgChanger