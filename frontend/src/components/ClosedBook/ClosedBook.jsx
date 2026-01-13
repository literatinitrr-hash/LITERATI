import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ClosedBook.css'

function ClosedBook() {
  const navigate = useNavigate()

  return (
    <div className="closedbook">

      <img
        src="/cave.gif"
        alt="background"
        className="closedbook-bg"
      />

      <div className="book-wrapper">

        <div className="book-glow" />

        <img
          src="/book.png"
          alt="book"
          className="book-image"
          onClick={() => navigate("login")}
        />

      </div>
    </div>
  )
}

export default ClosedBook
