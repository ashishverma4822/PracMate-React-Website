import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch('/db/courses.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const foundCourse = data.find(course => course.id === parseInt(id));
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          setError('Course not found');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
        setError('Failed to load course data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-6 max-w-4xl mx-auto text-blue-400">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 max-w-4xl mx-auto text-red-500">{error}</div>;
  }

  if (!course) {
    return null;
  }

  const { title, description, instructor, duration, price, logoUrl, instructorBio, instructorContact, instructorPhoto } = course;

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <div className="p-6 max-w-4xl mx-auto bg-zinc-800 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <img src={logoUrl} alt={title} className="w-24 h-24 mr-6 rounded-md" />
          <h1 className="text-3xl font-bold text-white">{title}</h1>
        </div>
        <p className="text-cyan-200 mb-6">{description}</p>
        <div className="bg-zinc-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-sky-100">Details</h2>
          <p className="text-cyan-300 mb-4">Instructor: {instructor}</p>
          <p className="text-green-300 mb-4">Duration: {duration}</p>
          <p className="text-yellow-300 mb-4">Price: ${price.toFixed(2)}</p>
          <Link to={`/buy/${id}`}>
            <button className="mt-4 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
              Buy Now
            </button>
          </Link>
        </div>
        {instructorBio && (
          <div className="bg-zinc-700 p-6 rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-sky-100 mb-2">Instructor Bio</h3>
            <div className="flex items-center mb-4">
              {instructorPhoto && (
                <img src={instructorPhoto} alt={`Photo of ${instructor}`} className="w-16 h-16 rounded-full mr-4" />
              )}
              <div>
                <p className="text-cyan-200 mb-2">{instructorBio}</p>
                {instructorContact && (
                  <p className="text-blue-400">Contact: {instructorContact}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetailsPage;
