import React from 'react';

const ThankYouPage2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-teal-400">Thank You!</h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-6">
        Your application has been submitted successfully. We will get back to you soon.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500"
      >
        Return to Home
      </a>
    </div>
  );
};

export default ThankYouPage2;
