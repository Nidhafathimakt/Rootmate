
import React from 'react'
import Sidebar from '../../admin/Sidebar'

function AdminLayout({children}) {
  return (
    <div  className="flex min-h-screen bg-gray-100"> 
      <Sidebar/>
        {children}
        {/* <Footer/> */}
        </div>
  )
}

export default AdminLayout