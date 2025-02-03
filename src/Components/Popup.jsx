import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the popup when the site loads
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to close the popup
  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">

            <h1 className="mb-4 text-xl font-bold">

              This Site is Still Under Construction

            </h1>

            <button
              className="w-32 bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" onClick={closePopup}>

              Dismiss

            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
