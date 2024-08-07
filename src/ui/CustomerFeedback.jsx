import React from "react";

const feedbacks = [
  { name: "Jenny Wilson", feedback: "The food was excellent...", rating: 5 },
  {
    name: "Dianne Russell",
    feedback: "We enjoyed the Eggs Benedict...",
    rating: 4,
  },
  // More feedbacks...
];

const CustomerFeedback = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{feedback.name}</h3>
          <p>{feedback.feedback}</p>
          <p>{"⭐".repeat(feedback.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
