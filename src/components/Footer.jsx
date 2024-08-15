import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-center py-6 md:py-10 rounded-t-xl">
      <p className="text-cyan-100 mb-2 text-base md:text-lg">
        Contact Us: <a href="mailto:contact@pracmate.com" className="text-[#ADD8E6] hover:underline">contact@pracmate.com</a>
      </p>
      <p className="text-cyan-100 mb-6 text-base md:text-lg">Follow us on social media</p>
      <div className="flex justify-center space-x-6 md:space-x-8">
        <a 
          href="#" 
          aria-label="Facebook" 
          title="Follow us on Facebook" 
          className="text-cyan-100 hover:text-[#ADD8E6]"
        >
          <i className="ri-facebook-circle-line text-3xl md:text-4xl"></i>
        </a>
        <a 
          href="#" 
          aria-label="Twitter" 
          title="Follow us on Twitter" 
          className="text-cyan-100 hover:text-[#ADD8E6]"
        >
          <i className="ri-twitter-line text-3xl md:text-4xl"></i>
        </a>
        <a 
          href="#" 
          aria-label="Instagram" 
          title="Follow us on Instagram" 
          className="text-cyan-100 hover:text-[#ADD8E6]"
        >
          <i className="ri-instagram-line text-3xl md:text-4xl"></i>
        </a>
        <a 
          href="#" 
          aria-label="LinkedIn" 
          title="Follow us on LinkedIn" 
          className="text-cyan-100 hover:text-[#ADD8E6]"
        >
          <i className="ri-linkedin-line text-3xl md:text-4xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
