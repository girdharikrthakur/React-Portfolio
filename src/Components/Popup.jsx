import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-[#171717] bg-opacity-10 backdrop-blur-md flex items-center justify-center z-50">
          <motion.div
            initial={{ y: -50, opacity: 0 }} // Start position (above and invisible)
            animate={{ y: 0, opacity: 1 }}   // Drop and fade in
            exit={{ y: -50, opacity: 0 }}    // Animate out
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth effect
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h1 className="mb-4 text-xl font-bold text-gray-800">
              This Site is Still Under Construction
            </h1>

            <button
              className="w-32 bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600"
              onClick={closePopup}
            >
              Dismiss
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Popup;
