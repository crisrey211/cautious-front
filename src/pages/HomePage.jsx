import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <main className="items-center justify-center flex md:flex-row h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-semibold text-center px-6 z-10 leading-loose text-white dark:text-white ">
                    Authenticator App
                </h1>
                <div className="flex py-1 gap-3">
                    <Link
                        to={'/login'}
                        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Login
                    </Link>
                    <Link
                        to={'/register'}
                        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Register
                    </Link>
                </div>
                <Outlet />
            </div>
        </main>
    )
}

export default HomePage
