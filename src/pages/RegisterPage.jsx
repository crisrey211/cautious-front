import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

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
        <div className="flex items-center h-screen justify-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="backdrop-blur-sm bg-sky-400/30 max-w-md w-full p-10 rounded-md">
                {registerError.map((error, index) => (
                    <div className="bg-red-500 p-2 text-white" key={index}>
                        {error}
                    </div>
                ))}
                <h1 className="text-2xl font-bold">Register</h1>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex max-w-md flex-col gap-4"
                    onSubmit={onSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username1" value="Your username" />
                        </div>
                        <TextInput
                            id="username"
                            type="text"
                            placeholder="Username"
                            {...register('username', { required: true })}
                        />
                    </div>

                    {errors.username && <p className="text-red-600"> Username is required</p>}

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: true })}
                        />
                    </div>
                    {errors.email && <p className="text-red-600">Email is required</p>}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput
                            id="password1"
                            placeholder="Password"
                            type="password"
                            {...register('password', { required: true })}
                        />
                    </div>
                    {errors.password && <p className="text-red-600">Password is required</p>}
                    <Button type="submit">Register</Button>
                </form>
                <p className="flex gap-x-2 justify-between">
                    Already have an account?
                    <Link to={'/login'} className="text-sky-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default RegisterPage
