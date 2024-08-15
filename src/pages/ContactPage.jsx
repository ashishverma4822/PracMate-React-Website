import React from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
      <div className="w-full max-w-4xl p-8 bg-gray-600 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-extrabold text-white mb-6 text-center"
          // initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
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
              <span className="text-gray-200 font-semibold">Name:</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 font-semibold">Email:</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 font-semibold">Message:</span>
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                rows="4"
                required
              />
            </label>
            <motion.button
              type="submit"
              className="self-center px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              whileHover={{ scale: 1.05 }}
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
