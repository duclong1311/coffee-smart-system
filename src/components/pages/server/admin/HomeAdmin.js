import { Outlet } from "react-router-dom";
import Dashboard from "../staff/Dashboard";
import DashboardNavbar from "../staff/DashboardNavbar";
export function HomeAdmin() {
    return (
        <>
            <div className="min-h-screen bg-[#f9f5ec]">
                <Dashboard />
                <div className="p-4 xl:ml-80">
                    <DashboardNavbar />
                    <div className="mt-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}