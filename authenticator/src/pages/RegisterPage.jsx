import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { signup, isAuthenticated, errors: registerError } = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className="w-full max-w-xs">
            {registerError.map((error, index) => (
                <div className="bg-red-500 p-2 text-white" key={index}>
                    {error}
                </div>
            ))}
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={onSubmit}
            >
                <div className="mb-4">
                    <input
                        placeholder="Username"
                        type="text"
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('username', { required: true })}
                    />
                </div>
                {errors.username && (
                    <p className="text-red-600"> Username is required</p>
                )}
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
                        Register
                    </button>
                </div>
            </form>
            <p className="flex gap-x-2 justify-between">
                Already have an account?
                <Link to={'/login'} className="text-sky-500">
                    Sign up
                </Link>
            </p>
        </div>
    )
}
export default RegisterPage
