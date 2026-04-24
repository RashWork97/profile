import React from 'react'
import img from "./assets/Pic2.jpg"

export default function ResumePic() {
  return (
    <>
    <img src={img} alt="Profile" className='w-full h-full object-cover'/>
    </>
  )
}
