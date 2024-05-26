import React from 'react'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log('respuesta', res)
    })

    return (
        <div className="w-full max-w-xs">
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
                <div className="mb-4">
                    <input
                        placeholder="Email"
                        type="email"
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mb-6">
                    <input
                        placeholder="Password"
                        type="password"
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('password', { required: true })}
                    />
                    <p className="text-red-500 text-xs italic">
                        Please choose a password.
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}
export default RegisterPage
