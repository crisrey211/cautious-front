import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button, Navbar } from 'flowbite-react'

const NavbarCustom = () => {
    const { isAuthenticated, logOut, user } = useAuth()
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <Link to={isAuthenticated ? '/tasks' : '/'}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-cyan-900 dark:text-white">
                        Task Manager
                    </span>
                </Link>
            </Navbar.Brand>
            {isAuthenticated ? (
                <React.Fragment>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className="text-2xl font-bold text-cyan-950 dark:text-whit">Welcome {user.username}</li>
                        <li>
                            <Link
                                to={'/add-task'}
                                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Add Task
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                                to={'/'}
                                onClick={() => {
                                    logOut()
                                }}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <li>
                        <Link
                            to={'/login'}
                            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'/register'}
                            className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Register
                        </Link>
                    </li>
                </React.Fragment>
            )}
        </Navbar>
    )
}

export default NavbarCustom
