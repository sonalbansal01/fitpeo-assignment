import React from "react";
import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: 15478256,
    amount: "$124.00",
    status: "Delivered",
    profileImage: user01,
  },
  {
    customer: "Jane Cooper",
    orderNo: 48967586,
    amount: "$305.02",
    status: "Pending",
    profileImage: user02,
  },
  {
    customer: "Jane Cooper",
    orderNo: 48967586,
    amount: "$305.02",
    status: "Pending",
    profileImage: user03,
  },
  // More orders...
];

const statusStyles = {
  Delivered: "bg-green-500",
  Pending: "bg-red-500",
};

const RecentOrders = () => {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 h-min w-full col-span-2 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
      <table className="w-full h-52 md:table-fixed text-left">
        <thead>
          <tr>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Order No.</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody className="mb-4">
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b justify-center items-baseline dark:border-gray-700"
            >
              <td className="py-2 flex items-center">
                <img
                  src={order.profileImage}
                  alt={`${order.customer}'s profile`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                {order.customer}
              </td>
              <td className="py-2">{order.orderNo}</td>
              <td className="py-2">{order.amount}</td>
              <td className="py-2">
                <span
                  className={`inline-block px-2 py-1 text-white rounded-full ${
                    statusStyles[order.status] || "bg-gray-500"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
