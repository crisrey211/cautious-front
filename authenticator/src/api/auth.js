/* import axios from 'axios' */
import axios from './axios'

const API = 'http://localhost:4321/api'

export const registerRequest = async (user) => {
    try {
        const response = await axios.post(`/register`, user)
        return response.data // Devuelve la respuesta en caso de éxito
    } catch (error) {
        console.error('Error during registration request:', error)
        throw error // Lanza el error para que pueda ser manejado por el llamador
    }
}

export const loginRequest = async (user) => {
    try {
        const response = await axios.post(`/login`, user)
        return response
    } catch (error) {
        console.log('Error during de login:', error)
        throw error
    }
}

export const verifyTokenRequest = () => axios.get('/verify')
