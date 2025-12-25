import React, { useEffect, useRef, useState } from 'react'

import './Book.css'


const Book = () => {
  const [formData, setFormData] = useState({
  Name: "",
  phone: "",
  college: "",
  year: "",
  major: "",
  city: "",
  state: ""
});

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
};



  
  

  return (
    <div className='book pt-[72px] max-w-screen h-screen  flex justify-center items-center'>
      <img src="src/assets/1213.gif" alt="cave gif" className='w-full'/>
      <div className='absolute h-[100%] flex justify-center items-center '>
        <img
          src="src/assets/slazzer-preview-npzbp.svg"
          alt="book"
          className="h-full object-contain"
        />

      <div className='
      book-form-wrapper'>
      
      <form 
      onSubmit={handleSubmit}
      className="
      Form
      
      ">
      
      
      
       
      
      

          <div
           
          className="left-page ">
            <h2 className="text-[1.4em] font-semibold text-center relative top-0 underline">
              Registration Form
            </h2>
            <div>Enter Your Name </div>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter your name"
              className=" rounded border border-gray-300 "
            />

            
            <div>Enter Your Phone Number  </div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=""
              className=" rounded border border-gray-300"
            />
            <div>College/School Name</div>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter full name of your College/School "
              className=" rounded border border-gray-300"
            />
            <div>College Year/ Class</div>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="Enter full name of your College/School "
              className=" rounded border border-gray-300"
            />
            <div>Major (NA for School Students)</div>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              placeholder="Enter Major "
              className=" rounded border border-gray-300"
            />


          </div>

          {/* RIGHT PAGE */}
          <div
          
           className="right-page  ">
            <div>Town/ City</div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter Town Name/ City Name "
              className=" rounded border border-gray-300"
            />
            <div>State</div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
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

