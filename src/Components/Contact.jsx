import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-[500px] bg-gray-100">
      <form className="bg-white-200 p-8 rounded-lg shadow-lg min-w-[400px] mt-30">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
