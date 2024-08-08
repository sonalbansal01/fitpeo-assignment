import React from "react";
import DashboardStats from "./DashboardStats";
import ActivityChart from "./ActivityChart";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import StatCard from "./StatCard";
import Goals from "./Goals";

const MainContent = () => {
  return (
    <main className="dark:text-white text-black  h-full sm:ml-16 bg-gray-100 p-4 sm:ml flex-1 gap-2 flex-col lg:flex-row translate-all duratin-300 mt-14 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
        <DashboardStats />
        <StatCard />
      </div>
      <div className="grid grid-cols-1 justify-end md:grid-cols-3 gap-4 mb-4">
        <ActivityChart />
        <Goals />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* iska mtlb ab isme teen item honge ek row mein but hum first item ko 2 item ki space denge or second ko 1  */}
        <RecentOrders />
        <CustomerFeedback />
      </div>
    </main>
  );
};

export default MainContent;
