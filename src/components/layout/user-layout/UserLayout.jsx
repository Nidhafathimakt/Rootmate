import React from 'react'
import Navbar from '../../user/Navbar';
import Footer from '../../user/Footer';

function UserLayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default UserLayout