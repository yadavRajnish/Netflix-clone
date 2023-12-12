import React from 'react';
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';

const Contact = () => {
  return (
    <div className='bg-main'>
      <Navbar />
      <div className="container mx-auto flex items-center justify-center min-h-screen ">
        {/* Updated padding here */}
        <div className="bg-white p-8 rounded-md w-full max-w-md mt-8 mb-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="mb-4">
            If you have any questions or feedback, feel free to reach out to us.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
