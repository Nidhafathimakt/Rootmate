// import Tripplanner from "./pages/Tripplanner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddListing from "./Pages/Addlisting";
import MyListings from "./Pages/Mylisting";
import ListingsApproval from "./Pages/ListingApproval";
import AdminDashboard from "./Pages/AdminDashboard";
import Tripplanner from "./Pages/Tripplanner";
function App() { 
  return (
      <Routes>
      
        <Route path="/" element={<ListingsApproval/>} />
        <Route path="/admindash" element={<AdminDashboard/>} />
         <Route path="/addlisting" element={<AddListing/>} />
          <Route path="/tripplanner" element={<Tripplanner/>} />
           <Route path="/mylisting" element={<MyListings/>} />
           


      
    </Routes>
    
  )
}

export default App;
