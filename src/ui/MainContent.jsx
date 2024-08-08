import React from "react";
import DashboardStats from "./DashboardStats";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import StatCard from "./StatCard";
import Goals from "./Goals";

const MainContent = () => {
  return (
    <main className="dark:text-white text-black ml-0 h-full sm:ml-64 bg-gray-100 p-4 sm:ml flex-1 gap-2 flex-col lg:flex-row translate-all duratin-300 mt-14 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
        <DashboardStats />
        <StatCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ActivityChart />
        <CustomerFeedback />
        <RecentOrders />
        <Goals />
      </div>
    </main>
  );
};

export default MainContent;
