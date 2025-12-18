import React, { useEffect, useRef, useState } from 'react'
import './Book.css'

const Book = () => {

  
  

  return (
    <div className='max-w-screen h-screen  flex justify-center items-center'>
      <div className='absolute h-[80%] flex justify-center items-center '>
        <img
          src="src\assets\slazzer-preview-npzbp.svg"
          alt="book"
          className="md:h-full md:object-contain"
        />

      <div className='
      absolute 
      w-[77%]
        
      
      overflow-auto
      
      
      
      aspect-[510.92/375.32] flex'>
      
      <form className="
      relative
      w-full
      h-full
      grid grid-cols-2
      gap-[5%]
      text-black
      text-[0.85em]
      ">
      
      
      
       
      
      

          <div className="flex  flex-col  w-full space-y-[1.2em] p-2  ">
            <h2 className="text-[1.4em] font-semibold text-center relative top-0 underline">
              Registration Form
            </h2>
            <div>Enter Your Name </div>
            <input
              type="text"
              placeholder="First Name"
              className=" rounded border border-gray-300 "
            />

            <input
              type="text"
              placeholder="Last Name"
              className=" rounded border border-gray-300"
            />
            <div>Enter Your Phone Number  </div>
            <input
              type="number"
              placeholder=""
              className=" rounded border border-gray-300"
            />
            <div>College/School Name</div>
            <input
              type="text"
              placeholder="Enter full name of your College/School "
              className=" rounded border border-gray-300"
            />
            <div>College Year/ Class</div>
            <input
              type="text"
              placeholder="Enter full name of your College/School "
              className=" rounded border border-gray-300"
            />
            <div>Major (NA for School Students)</div>
            <input
              type="text"
              placeholder="Enter Major "
              className=" rounded border border-gray-300"
            />


          </div>

          {/* RIGHT PAGE */}
          <div className="flex flex-col mt-4 space-y-4 text-black w-full p-2  ">
            <div>Town/ City</div>
            <input
              type="text"
              placeholder="Enter Town Name/ City Name "
              className=" rounded border border-gray-300"
            />
            <div>State</div>
            <input
              type="text"
              placeholder="Enter Your State Name "
              className=" rounded border border-gray-300"
            />

            <button type="submit" className='underline m-2 text-[1.4em] hover:text-green-600 cursor-pointer'>Register</button>


          </div>


        </form>
      </div>
      </div>
    </div>


  )
}

export default Book

