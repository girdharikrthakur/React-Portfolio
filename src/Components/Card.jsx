const Card = ({ title, description }) => {
  return (
    <div className="dark:bg-[#171717] bg-white shadow-lg rounded-lg p-4 m-4 min-w-110 min-h-70 z-10">
      <h2 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 text-center dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
