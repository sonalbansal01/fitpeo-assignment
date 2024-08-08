import React from "react";
import { users } from "../constants/index";
import user01 from "../assets/user01.png";
import user02 from "../assets/user02.png";
import user03 from "../assets/user03.png";

const feedbacks = [
  {
    name: "Jenny Wilson",
    feedback:
      "The service was okay, but there were some areas for improvement. While the staff was friendly, the overall experience didn’t quite meet my expectations. Hoping for better next time.",
    rating: 5,
    profileImage: user01,
  },
  {
    name: "Dianne Russell",
    feedback:
      "Exceptional service and quality! The team was professional, attentive, and exceeded my expectations. Highly recommend for anyone seeking top-notch results and a seamless experience. ",
    rating: 4,
    profileImage: user02,
  },
  // More feedbacks...
];

const CustomerFeedback = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="mb-4 border-b border-slate-700	">
          <div className="flex items-center">
            <img
              src={feedback.profileImage}
              alt={`${feedback.name}'s profile`}
              className="w-10 h-10 rounded-full mr-4"
            />
            <h3 className="font-bold">{feedback.name}</h3>
          </div>
          <p className="">{"⭐".repeat(feedback.rating)}</p>
          <p className="text-xs mt-2 mb-2">{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
