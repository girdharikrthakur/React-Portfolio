
const Contact = () => {
  return (
    <div className="overflow-hidden flex flex-col md:flex-row mt-16 z-2">
      <div className="h-[50px]"></div>
      {/* Form Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <form
          name="contact"
          className="p-8 shadow bg-white shadow-gray-300 dark:shadow-gray-900 rounded-lg w-full max-w-md dark:bg-[#171717] z-1"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Contact Us
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
        <p className="dark:text-white text-black text-lg">Other Details</p>
      </div>
    </div>
  );
};

export default Contact;
