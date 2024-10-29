import axios from "axios";

const api=axios.create({
    baseURL:"https://json-server-beta-three.vercel.app"
})
export default api;