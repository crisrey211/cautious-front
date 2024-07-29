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
                            <Button size={'xs'}>
                                <Link to={'/add-task'}>Add Task</Link>
                            </Button>
                        </li>
                        <li>
                            <Button size={'xs'}>
                                <Link
                                    to={'/'}
                                    onClick={() => {
                                        logOut()
                                    }}
                                >
                                    Logout
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <li>
                        <Button size={'xs'}>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </li>
                    <li>
                        <Button size={'xs'}>
                            <Link to={'/register'}>Register</Link>
                        </Button>
                    </li>
                </React.Fragment>
            )}
        </Navbar>
    )
}

export default NavbarCustom
