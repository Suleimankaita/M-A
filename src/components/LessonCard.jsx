import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ lesson, dashboardView = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={lesson.image || 'https://via.placeholder.com/600x400'} 
          alt={lesson.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
        <p className="text-sm text-gray-600 mb-4">Tutor: <span className="font-medium text-indigo-600">{lesson.tutor}</span></p>
        
        {dashboardView ? (
          /* Dashboard View: Progress and Action */
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="mb-2 flex justify-between items-center text-sm font-medium">
              <p className="text-gray-700">Progress:</p>
              <p className="text-indigo-600">{lesson.progress ? `${lesson.progress}% Complete` : lesson.format}</p>
            </div>
            {lesson.progress !== null && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${lesson.progress || 0}%` }}
                  ></div>
                </div>
            )}
            <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
              {lesson.format === 'online' ? 'Continue Lesson' : 'View Schedule'}
            </button>
          </div>
        ) : (
          /* General Catalog View: Price and Buttons */
          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-2xl font-bold text-gray-900 mb-4"> ₦{lesson.price}</p>
            <div className="flex space-x-3">
              <Link className='justify-center items-center flex-1 py-2 text-indigo-600 border border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-200' to={`/lessons/${lesson.id}`}>
              <button className='w-full'>
                Details
              </button>
              </Link>
              <button className="flex-1 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonCard;