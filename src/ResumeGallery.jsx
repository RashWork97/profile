import React from 'react'
import "./App.css"
import img1 from "./assets/Pic1.jpg"
import img2 from "./assets/Pic2.jpg"
import img3 from "./assets/Pic3.jpg"

function ResumeGallery() {
  return (
    <>
    <div className='text-center p-6 font-serif text-3xl border h-full'> Project Done 
        <div className='grid grid-cols-3 gap-6 p-5 h-full'>
            <img src={img1} alt='Pic1' className='grayscale w-full h-1/2 object-cover rounded-lg drop-shadow-xl hover:h-full hover:grayscale-0 transition-ease-in-out duration-300'/>
            <img src={img2} alt='Pic2' className='grayscale w-full h-1/2 object-cover rounded-lg drop-shadow-xl hover:h-full hover:grayscale-0 transition-ease-in-out duration-300'/>
            <img src={img3} alt='Pic3' className='grayscale w-full h-1/2 object-cover rounded-lg drop-shadow-xl hover:h-full hover:grayscale-0 transition-ease-in-out duration-300'/>
            <div className= 'shadow-lg bg-neutral-50 h-[100px] w-[200px] text-[15px] border border-[1px] border-gray-300 rounded-md pl-4 pt-2 text-left'> Contact me.
                <p className='text-[10px] pr-2 pt-2 text-gray-400'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. </p>
            </div>
        </div>
    </div>
    </>
  )
}
    
export default ResumeGallery