import React from 'react'
import UserLayout from '../layout/user-layout/UserLayout'
import { Outlet } from 'react-router-dom'

function UserProtectedRoute() {
    
  return (
    <UserLayout>
        <Outlet/>
    </UserLayout>
  )
}

export default UserProtectedRoute