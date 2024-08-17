import React from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <div className="m-4 w-full max-w-2xl p-6 bg-gray-700 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
        <motion.h2
          className="text-3xl font-extrabold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <div className="contact-form">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="5ccc6ac8-478b-4fef-82e9-b5714ebba614"
            />
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 text-lg font-semibold">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 text-lg font-semibold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 text-lg font-semibold">Message</span>
              <textarea
                name="message"
                placeholder="Type your message"
                className="p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-500 text-white"
                rows="4"
                required
              />
            </label>
            <motion.button
              type="submit"
              className="self-center px-6 py-3 bg-cyan-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
