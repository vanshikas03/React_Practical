import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer aaaabbbccc` // Replace with your actual token or authentication mechanism
    }
});
 
export default api;