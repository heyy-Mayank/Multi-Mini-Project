import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordian from './components/accordian/Accordian.jsx'
import Color from './components/Random-Color/Color.jsx' // capitalize import

createRoot(document.getElementById('root')).render(
    <>
       <div><Color /></div> 
    </>
)