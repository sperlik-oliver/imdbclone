import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVICE_URL,
    headers: { 'Authorization': process.env.REACT_APP_AUTH_API_KEY },
    validateStatus: (status) => status !== 500
})