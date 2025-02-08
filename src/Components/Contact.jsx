import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-screen h-screen bg-gradient-to-t from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4">
        {/* Title Section with Underline */}
        <div className="pb-8">
          <div className="flex items-center gap-4">
            <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
              Contact
            </p>
          </div>
          <p className="py-6 text-lg">
            Submit the form below to get in touch with me or{" "}
            <a
              href="mailto:mathurprakha1@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              Email me
            </a>{" "}
            directly.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <form
            action="#"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 hover:shadow-lg transition duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
