import './App.css'
import "./Styles/global.css";
// import { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import Itinerary from './pages/user/Itinerary';
import HotelListing from './pages/user/HotelListing';
import Home from "./pages/home";
import SearchPage from "./pages/SearchPage ";
import Login from './User/Pages/Login'
import SignUp from './User/Pages/SignUp'
import Multidestination from './User/Pages/Multidestination'
import HotelMenu from './User/Pages/HotelMenu'
import Sidebar from './Components/Sidebar'
import Ownerdashboard from './Components/Ownerdashboard'
import Adminpage from './Admin/Pages/Adminpage'
import AddListing from "./Pages/Addlisting";
import MyListings from "./Pages/Mylisting";
import ListingsApproval from "./Pages/ListingApproval";
import AdminDashboard from "./Pages/AdminDashboard";
import Tripplanner from "./Pages/Tripplanner";

import Planresults from './pages/Planresults'
import Savedtrip from './pages/Savedtrip'
function App() {


  return (
    <>
      <Routes>
        <Route path='/itineray' element={<Itinerary/>}/>
        <Route path='/hotelListing' element={<HotelListing/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/multidestination' element={<Multidestination/>}/>
        <Route path='/hotelmenu' element={<HotelMenu/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/Ownerdash' element={<Ownerdashboard/>}/>
        <Route path='/Adminpage' element={<Adminpage/>}/>
        <Route path='/savedTrip' element={<Savedtrip />}/>
      <Route path='/Planresults' element={<Planresults />}/>
      <Route path="/listingApproval" element={<ListingsApproval/>} />
        <Route path="/admindash" element={<AdminDashboard/>} />
         <Route path="/addlisting" element={<AddListing/>} />
          <Route path="/tripplanner" element={<Tripplanner/>} />
           <Route path="/mylisting" element={<MyListings/>} />
       
      </Routes>

    </>
  )
}

export default App


