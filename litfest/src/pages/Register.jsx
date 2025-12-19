import {useState} from 'react'
import ClosedBook from '../components/ClosedBook/ClosedBook'
import Login from '../components/Login/Login'
import Header from '../components/Header/Header'

function Register() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div>
        <Header/>
      {!showLogin && <ClosedBook onOpen={() => setShowLogin(true)} />}
        {showLogin && <Login />}
    </div>
  )
}

export default Register
