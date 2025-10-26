import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Accordian from './components/accordian/Accordian.jsx'
import Color from './components/Random-Color/Color.jsx' // capitalize import
import StarRating from './components/Star-rating/StarRating.jsx'

createRoot(document.getElementById('root')).render(
    <>
       <div><StarRating noOfStars={10} /></div> 
    </>
)