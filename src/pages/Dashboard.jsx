import React from "react";
import Topbar from "../layouts/Topbar";
import DashboardStatsGrid from "../layouts/DashboardStatsGrid";
import SalesChart from "../layouts/SalesChart";
import OrderStatus from "../layouts/OrderStatus";
import RecentOrders from "../layouts/RecentOrders";
import RecentActivity from "../layouts/RecentActivity";

const Dashboard = () => {
  return (
    <>
      <Topbar />
        <div className="flex flex-col">
        <DashboardStatsGrid />
        <div>
        <div className="grid grid-cols-4">
        <div className="col-span-3 mr-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="col-span-2">
            <SalesChart />
          </div>
          <div className="col-span-1">
            <OrderStatus />
          </div>
          <div className="col-span-3">
          <RecentOrders/>
          </div>
        </div>
        </div>
          <div className="mt-4 col-span-1">
            <RecentActivity />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
