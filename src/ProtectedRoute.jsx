import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavbarCustom from './components/Navbar'
import { useAuth } from './context/AuthContext'

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()

    if (isLoading) return <h1>Loading...</h1>
    if (!isAuthenticated) return <Navigate to="/login" replace />

    return (
        <div>
            <NavbarCustom />
            <Outlet />
        </div>
    )
}

export default ProtectedRoute
