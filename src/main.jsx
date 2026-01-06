import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'

const client_Id ="141424057002-qvqmr02bg4muia7nha4hs27nhmraihl6.apps.googleusercontent.com";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_Id} >
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)