import {createBrowserRouter} from "react-router";
import Sidebar from "../Layouts/Sidebar.jsx";

export const routes = createBrowserRouter([
    { path: '/', element: <Sidebar/>}
])