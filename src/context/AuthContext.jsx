import { createContext, useContext, useEffect, useState } from 'react'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

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
    const [isLoading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            setErrors(error.response.data)
            setLoading(false)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            setErrors(error.response.data)
            console.error(error)
            setLoading(false)
        }
    }

    const logOut = () => {
        Cookies.remove('token')
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 7000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get()

            if (!cookies.token) {
                console.log('No hay token')
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
                return
            }

            try {
                const res = await verifyTokenRequest(cookies.token)

                if (res.data) {
                    setIsAuthenticated(true)
                    setUser(res.data)
                } else {
                    setIsAuthenticated(false)
                    setUser(null)
                }
            } catch (error) {
                console.error(error)
                setIsAuthenticated(false)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkLogin()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                user,
                signin,
                logOut,
                isAuthenticated,
                errors,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
