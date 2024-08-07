import React from "react";

const StatCard = ({ title, value, change, changeType, percentage }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white flex items-center w-full justify-between col-span-1">
      <div>
        <h3 className="text-lg">Net Profit</h3>
        <div className="flex items-baseline">
          <p className="text-4xl font-bold">$ 6780.34</p>
          <div
            className={`ml-2 flex items-center ${
              changeType === "increase" ? "text-green-500" : "text-red-500"
            }`}
          >
            {changeType === "increase" ? "▲" : "▼"}
            <span className="ml-1 text-lg">{change}%3</span>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <svg className="w-16 h-16">
          <circle
            className="text-gray-300"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r="28"
            cx="32"
            cy="32"
          />
          <circle
            className="text-blue-500"
            strokeWidth="4"
            strokeDasharray={`${percentage * 1.76} 176`}
            strokeLinecap="round"
            fill="transparent"
            r="28"
            cx="32"
            cy="32"
            transform="rotate(-90 32 32)"
          />
        </svg>
        <div className="absolute text-center">
          <p className="text-lg font-bold">70%</p>
          <p className="text-xs">Goal Completed</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
