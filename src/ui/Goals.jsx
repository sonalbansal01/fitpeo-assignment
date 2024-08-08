import React from "react";

const Goals = () => {
  const BurgerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M4 6h16a2 2 0 012 2v1H2V8a2 2 0 012-2zm16 4H4v1h16v-1zM2 14h20v1H2v-1zm18 2H4v1h16v-1zm-1 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1h16z" />
    </svg>
  );

  const AimingTargetIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );

  const DishPlateIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
    </svg>
  );

  const stats = [
    {
      title: "Goals",
      change: 3,
      icon: <AimingTargetIcon />,
      bgColor: "bg-white dark:bg-gray-800",
      changeType: "increase",
      color: "bg-red-400",
    },
    {
      title: "Popular Dishes",
      change: 3,
      icon: <BurgerIcon />,
      bgColor: "bg-white dark:bg-gray-800",
      changeType: "increase",
      color: "bg-blue-800", // Using Tailwind CSS class for dark blue
    },
    {
      title: "Menu",
      count: 75,
      change: 3,
      icon: <DishPlateIcon />,
      bgColor: "bg-white dark:bg-gray-800",
      changeType: "increase",
      color: "bg-sky-400", // Using Tailwind CSS class for sky blue
    },
  ];

  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md">
      {stats.map((stat, index) => (
        <div key={index} className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div
              className={`w-14 h-14 flex justify-center items-center rounded-full ${stat.color} text-white`}
            >
              {stat.icon}
            </div>
            <h3 className="text-base ml-4">{stat.title}</h3>
          </div>
          <div className="flex items-center">
            <p className="ml-1 flex justify-center items-center w-8 h-8 rounded-full  text-white bg-gray-700">
              &gt;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Goals;
