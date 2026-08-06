import axios from "axios";
import {errorToast} from "../utils/toasts.jsx";

const api = axios.create({
    baseURL: "https://6a574aec914a025dcff2bc7b.mockapi.io/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 10000,
});

export default api;