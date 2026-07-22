import {createBrowserRouter} from "react-router";
import Sidebar from "../Layouts/Sidebar.jsx";
import MainLayout from "../Layouts/MainLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Product from "../pages/Product.jsx";
import Customer from "../pages/Customer.jsx";

export const routes = createBrowserRouter([
    { path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Dashboard/>},
            {path: '/products', element: <Product/>},
            {path: '/customers', element: <Customer/>}
    ]}
])