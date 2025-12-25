import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function ClosedBook({onOpen}) {
  const navigate = useNavigate()
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      
     
      <img
        src="/cave.gif"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
      />

    
      <div
        className="
           group
           absolute
           left-1/2
           top-1/2
           -translate-x-1/2
           -translate-y-1/2
           z-20
           cursor-pointer
        "
      >
     
        <div
  className="
    absolute
      top-1/2
      left-1/2
      w-44
      h-44
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-cyan-400/60
      blur-3xl
      opacity-0
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-125
  "
/>


        
        <img
          src="/book.png"
          alt="book"
          onClick={() => navigate("/register/login")}
          className="
          w-40
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]
          "
        />
      </div>

    </div>
  );
}


export default ClosedBook
