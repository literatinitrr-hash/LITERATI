import React from 'react'

function ClosedBook({onOpen}) {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      
      {/* Background GIF */}
      <img
        src="/cave.gif"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Book Wrapper */}
      <div
        className="
          group
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-20
        "
      >
        {/* Glow (always on mobile, hover on desktop) */}
        <div
  className="
    absolute
    top-1/2
    left-1/2
    w-40
    h-40
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-cyan-400/50
    blur-3xl
    opacity-100
    transition-all
    duration-500

    md:opacity-0
    md:group-hover:opacity-100
    md:scale-110
  "
/>


        {/* Book Image */}
        <img
          src="/book.png"
          alt="book"
          onClick={onOpen}
          className="
            relative
    z-10
    w-40
    md:w-56
    cursor-pointer
    transition-transform
    duration-500
    md:group-hover:scale-110
    drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)]
          "
        />
      </div>

    </div>
  );
}


export default ClosedBook