import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const { signin, errors: singupErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data)
    })

    //when login is correct navigate to Tasks Page
    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    return (
        <div className="flex items-center h-[calc(100vh-100px)] justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {singupErrors.map((error, index) => (
                    <div
                        className="bg-red-500 p-2 m-2 text-white text-center"
                        key={index}
                    >
                        {error}
                    </div>
                ))}
                <h1 className="text-2xl font-bold">Login</h1>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={onSubmit}
                >
                    <div className="mb-4">
                        <input
                            placeholder="Email"
                            type="email"
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('email', { required: true })}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600">Email is required</p>
                    )}
                    <div className="mb-6">
                        <input
                            placeholder="Password"
                            type="password"
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('password', { required: true })}
                        />
                    </div>
                    {errors.password && (
                        <p className="text-red-600">Password is required</p>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className="flex gap-x-2 justify-between">
                    Don't have an account?{' '}
                    <Link to={'/register'} className="text-sky-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
