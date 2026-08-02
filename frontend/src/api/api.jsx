import axios from "axios";

const api = axios.create({
    baseURL: "https://6a574aec914a025dcff2bc7b.mockapi.io/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});
export default api;