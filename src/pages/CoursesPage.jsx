import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/db/courses.json') 
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error('Expected an array of courses');
        }
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleBuyClick = (courseId) => {
    navigate(`/buy/${courseId}`);
  };

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg space-y-12">
      <div className="m-12 p-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={course.logoUrl}
                  alt={`${course.title} logo`}
                  className="h-24 w-24 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white text-center">{course.title}</h3>
                <p className="text-cyan-300 mb-4 text-center text-lg font-semibold">Price: ${course.price.toFixed(2)}</p>
                <div className="flex flex-col gap-4 items-center">
                  <Link to={`/courses/${course.id}`} className="text-[#ADD8E6] hover:underline text-center">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleBuyClick(course.id)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-cyan-300">No courses available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
