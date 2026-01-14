import "./App.css";
import "./Styles/global.css";
// import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Itinerary from "./pages/user/Itinerary";
import HotelListing from "./pages/user/HotelListing";
import Home from "./pages/user/Home";
import SearchPage from "./pages/user/Searchpage/SearchPage ";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Multidestination from "./pages/user/Multidestination";
import HotelMenu from "./pages/user/HotelMenu";
import AddListing from "./pages/user/Addlisting";
import MyListings from "./pages/user/Mylisting";
import ListingsApproval from "./pages/user/ListingApproval";
import AdminDashboard from "./pages/user/AdminDashboard";
import Tripplanner from "./pages/user/Tripplanner";

import Planresults from "./pages/user/Planresults";
import Savedtrip from "./pages/user/Savedtrip";
import UserProtectedRoute from "./components/protected-route/UserProtectedRoute";
import AdminProtectedRoute from "./components/protected-route/AdminProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<UserProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/itineray" element={<Itinerary />} />
          <Route path="/hotelListing" element={<HotelListing />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/multidestination" element={<Multidestination />} />
          <Route path="/hotelmenu" element={<HotelMenu />} />
          <Route path="/savedTrip" element={<Savedtrip />} />
          <Route path="/planresults" element={<Planresults />} />
          <Route path="/tripplanner" element={<Tripplanner />} />
        </Route>
        
        <Route element={<AdminProtectedRoute/>} >

          <Route path="/mylisting" element={<MyListings />} />
          <Route path="/listingApproval" element={<ListingsApproval />} />
          <Route path="/addlisting" element={<AddListing />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
