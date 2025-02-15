const Card = ({ title, description }) => {
  return (
    <div className="dark:bg-[#171717] bg-white shadow-lg rounded-lg p-4 m-4 w-[450px] min-h-[300px]">
      <h2 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">{title}</h2>
      <p className="text-gray-600 text-center dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
