import {useState} from 'react'
import { Outlet } from 'react-router-dom';
import ClosedBook from '../components/ClosedBook/ClosedBook'
import Login from '../components/Login/Login'
import Header from '../components/Header/Header'

function Register() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Register
