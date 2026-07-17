import {createBrowserRouter} from "react-router";
import Sidebar from "../Layouts/Sidebar.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const routes = createBrowserRouter([
    { path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Dashboard/>}
    ]}
])