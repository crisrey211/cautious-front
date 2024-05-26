import axios from 'axios'

const API = 'https://localhost:4321/api'

export const registerRequest = (user) => axios.post(`${API}/register`, user)
