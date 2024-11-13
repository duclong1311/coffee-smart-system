import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardNavbar from "../staff/DashboardNavbar";

function Staff() {
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <Dashboard />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar />
          <div className="mt-0">
            {/* Nội dung sẽ thay đổi */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
