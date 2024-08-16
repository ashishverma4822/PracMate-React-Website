import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BuyNowPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    upiId: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/db/courses.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const foundCourse = data.find((course) => course.id === parseInt(id));
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError('Course not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
        setError('Failed to load course data');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    console.log('Purchase details:', formData);
    navigate('/thank-you');
  };

  if (loading) {
    return <div className="p-6 max-w-4xl mx-auto text-blue-400">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 max-w-4xl mx-auto text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <img src={course.logoUrl} alt={course.title} className="w-24 h-24 mr-6" />
          <h1 className="text-3xl font-bold text-white">{course.title}</h1>
        </div>
        <p className="text-cyan-200 mb-6">{course.description}</p>
        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-sky-100">Enter Your Details</h2>
          <p className="text-cyan-300 mb-4">Price: ${course.price.toFixed(2)}</p>
          <form onSubmit={handlePurchase} className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 font-semibold">Name:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 font-semibold">Email:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-gray-200 font-semibold">UPI ID:</span>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
