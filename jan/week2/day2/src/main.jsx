import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router'
 import { Slide, ToastContainer, Zoom } from 'react-toastify';
createRoot(document.getElementById('root')).render(
 // <StrictMode>
 <BrowserRouter>
    <ToastContainer position='top-left' theme='dark'   />
    <App />
 </BrowserRouter>
 // </StrictMode>,
)
