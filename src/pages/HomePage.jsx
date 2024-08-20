import { Button } from '@/components/ui/button'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <main className="items-center justify-center flex md:flex-row h-screen bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-semibold text-center px-6 z-10 bg-gradient-to-tl from-orange-100 via-indigo-900 to-orange-500 bg-clip-text text-transparent">
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
            </div>
        </main>
    )
}

export default HomePage
