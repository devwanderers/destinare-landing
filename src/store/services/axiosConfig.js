import axios from 'axios'

const axiosClient = axios.create({})

axiosClient.interceptors.response.use(
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
export default axiosClient
