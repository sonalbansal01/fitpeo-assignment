// LinkItem.jsx
import React from "react";

const LinkItem = ({ href, icon: Icon }) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 hover:bg-gray-100 group"
      >
        {Icon && <Icon className="w-6 h-6 mr-1" />}
      </a>
    </li>
  );
};

export default LinkItem;
