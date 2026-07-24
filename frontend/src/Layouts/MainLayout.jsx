import Sidebar from "./Sidebar.jsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <div className="flex w-full">
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    )
}