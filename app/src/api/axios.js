import axios from "axios"

const Axios = axios.create({
    baseURL: Process.env.VITE_BACKEND_URL,
    withCredentials: true,
})

export default Axios;

