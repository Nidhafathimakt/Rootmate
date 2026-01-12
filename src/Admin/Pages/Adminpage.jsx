import React from 'react'
// import NavBar from '../../Components/NavBar'

import Ownerdashboard from '../../Components/Ownerdashboard'
import Sidebar from '../../Components/Sidebar'

const Adminpage = () => {
  return (
    <>
      {/* <NavBar/> */}
    <div className="max-auto px-4 ">
        <Sidebar/>
        <Ownerdashboard/>

    </div>
    </>
  )
}

export default Adminpage
