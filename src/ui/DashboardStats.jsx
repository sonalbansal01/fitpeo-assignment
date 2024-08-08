import React from "react";

const stats = [
  {
    title: "Total Orders",
    count: 75,
    change: 3,
    icon: "📦",
    bgColor: "bg-white dark:bg-gray-800",
    changeType: "increase",
  },
  {
    title: "Total Delivered",
    count: 70,
    change: -3,
    icon: "🚚",
    bgColor: "bg-white dark:bg-gray-800",
    changeType: "decrease",
  },
  {
    title: "Total Cancelled",
    count: 5,
    change: 3,
    icon: "❌",
    bgColor: "bg-white dark:bg-gray-800",
    changeType: "increase",
  },
  {
    title: "Total Revenue",
    count: "$12k",
    change: -3,
    icon: "💰",
    bgColor: "bg-white dark:bg-gray-800",
    changeType: "decrease",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  col-span-2">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 rounded-lg ${stat.bgColor}`}>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-4xl">{stat.icon}</div>
              <div className="text-center">
                <h3 className="text-lg ">{stat.title}</h3>
              </div>
              <div className="flex  mt-2">
                <p className="text-2xl flex-1 ... font-bold">{stat.count}</p>
                {stat.changeType === "increase" ? (
                  <span className="text-green-500 ">▲</span>
                ) : (
                  <span className="text-red-500">▼</span>
                )}
                <p className="ml-1 ">{stat.change}%</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
