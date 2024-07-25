import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const { isAuthenticated, logOut, user } = useAuth()
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <Link to={'/'}>
                <h1>Task Manager</h1>
            </Link>
            {isAuthenticated ? (
                <React.Fragment>
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>Welcome {user.username}</li>
                        <li>
                            <Link to={'/add-task'}>Add Task</Link>
                        </li>
                        <li>
                            <Link
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
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>Register</Link>
                    </li>
                </React.Fragment>
            )}
        </nav>
    )
}

export default Navbar
