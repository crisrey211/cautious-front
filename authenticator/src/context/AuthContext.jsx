import { createContext, useContext, useEffect, useState } from 'react'
import {
    loginRequest,
    registerRequest,
    VerifyTokenRequest,
} from '../api/auth.js'
import Cookie from 'js-cookie'
export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            setErrors(error.response.data)
            console.error(error)
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setInterval(() => {
                setErrors([])
            }, 7000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    //Se tiene que actualizar el navegador para ver la respuesta de la cookie.
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookie.get()
            /* console.log(cookies) */

            if (!cookies.token) {
                /* console.log(cookies.token) */
                setIsAuthenticated(false)
                return setUser(null)
            }
            try {
                const res = await VerifyTokenRequest(cookies.token)
                if (!res.data) return setIsAuthenticated(false)

                setIsAuthenticated(true)
                setUser(res.data)
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
            }
        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider
            value={{ signup, user, signin, isAuthenticated, errors }}
        >
            {children}
        </AuthContext.Provider>
    )
}
