import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import ClosedBook from '../components/ClosedBook/ClosedBook'
import Login from '../components/Login/Login'
import Header from '../components/Header/Header'

function Register() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<ClosedBook />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default Register
