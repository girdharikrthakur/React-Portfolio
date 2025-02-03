import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-blue-100 bg-opacity-50 shadow-md rounded-lg p-4 m-4 min-w-110 min-h-70">
      <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
