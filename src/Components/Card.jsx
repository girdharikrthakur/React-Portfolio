import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="dark:bg-gray-700 bg-white bg-opacity-90 shadow rounded-lg p-4 m-4 min-w-110 min-h-70">
      <h2 className="text-lg font-bold mb-2 text-center dark:text-white">{title}</h2>
      <p className="text-gray-600 text-center dark:text-white">{description}</p>
    </div>
  );
};

export default Card;
