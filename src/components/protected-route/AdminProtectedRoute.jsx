import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLayout from '../layout/admin-layout/AdminLayout'

function AdminProtectedRoute() {
  return (
    <AdminLayout>
        <Outlet/>
    </AdminLayout>
  )
}

export default AdminProtectedRoute