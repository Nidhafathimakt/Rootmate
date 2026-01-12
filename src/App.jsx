import './App.css'
import "./Styles/global.css";
// import { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import Itinerary from './pages/Itinerary';
import HotelListing from './pages/HotelListing';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Itinerary/>}/>
        <Route path='/hotelListing' element={<HotelListing/>}/>
      </Routes>
    </>
  )
}

export default App
