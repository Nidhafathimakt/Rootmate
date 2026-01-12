import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage ";


function App() {
  return(
    <>
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/searchpage" element={<SearchPage />} />
    </Routes>
    </>

  )
}

export default App;
