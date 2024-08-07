import React from "react";

const orders = [
  {
    customer: "Wade Warren",
    orderNo: 15478256,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: 48967586,
    amount: "$305.02",
    status: "Delivered",
  },
  // More orders...
];

const RecentOrders = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Customer</th>
            <th className="pb-2">Order No.</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-b dark:border-gray-700">
              <td className="py-2">{order.customer}</td>
              <td className="py-2">{order.orderNo}</td>
              <td className="py-2">{order.amount}</td>
              <td className="py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
