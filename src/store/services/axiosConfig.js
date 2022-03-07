import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? 'https://destinare.io/api-destinare'
            : 'http://localhost:3000/',
})

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response)
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
        if (error.response.status === 403) {
            // window.location = '/logout'
        } else {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
    }
)
export default axiosInstance
