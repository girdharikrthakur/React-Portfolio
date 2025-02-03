import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-100 h-50">
      <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
