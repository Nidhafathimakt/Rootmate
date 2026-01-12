import './App.css'
import "./Styles/global.css";
// import { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import Itinerary from './pages/user/Itinerary';
import HotelListing from './pages/user/HotelListing';
import Home from "./pages/home";

import SearchPage from "./pages/SearchPage ";

function App() {


  return (
    <>
      <Routes>
        <Route path='/itineray' element={<Itinerary/>}/>
        <Route path='/hotelListing' element={<HotelListing/>}/>
          <Route path="/" element={<Home />} />
   <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App


