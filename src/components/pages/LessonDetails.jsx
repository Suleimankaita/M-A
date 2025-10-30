import React from "react";
import { useParams } from "react-router-dom";
import { lessonsData } from "../data/lessonData";

const LessonDetails = () => {
  const { id } = useParams();
  const lesson = lessonsData.find((item) => item.id === id);

  if (!lesson) {
    return (
      <div className="text-center text-red-600 text-2xl py-20">
        Lesson not found 😢
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Lesson Title & Header Image */}
      <div className="mb-8">
        <div className="bg-gray-100 h-64 rounded-xl overflow-hidden mb-6">
          <img
            src={lesson.headerImage}
            alt={lesson.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex space-x-3 text-sm font-medium text-white mb-2">
          <span className="px-3 py-1 bg-indigo-600 rounded-full">
            {lesson.format}
          </span>
          <span className="px-3 py-1 bg-gray-700 rounded-full">
            {lesson.duration}
          </span>
          <span className="px-3 py-1 bg-yellow-600 rounded-full">
            {lesson.category}
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900">
          {lesson.title}
        </h1>
      </div>

      {/* Main Content and Purchase Sticky Sidebar */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-10">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Course Overview
            </h2>
            <p className="text-gray-700">
              This comprehensive course dives deep into {lesson.title}, equipping
              you with the skills to identify key value drivers, red flags, and
              potential synergies in any M&A transaction.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700 ml-4">
              <li>Key concepts of commercial and financial due diligence.</li>
              <li>How to structure complex deal models in Excel.</li>
              <li>Understanding the legal and regulatory framework of M&A.</li>
              <li>Effective post-merger integration strategies.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Meet Your Instructor
            </h3>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm">
              <img
                src={lesson.tutor.image}
                alt={lesson.tutor.name}
                className="h-20 w-20 rounded-full object-cover mr-6 border-4 border-white shadow-md"
              />
              <div>
                <h4 className="text-xl font-bold text-indigo-600">
                  {lesson.tutor.name}
                </h4>
                <p className="text-sm font-medium text-gray-500 mb-3">
                  Lead M&A Specialist
                </p>
                <p className="text-gray-700">{lesson.tutor.bio}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-8 bg-white p-6 rounded-xl shadow-xl border border-indigo-100">
            <p className="text-sm font-medium text-indigo-600 uppercase mb-1">
              Total Course Price
            </p>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
              ${lesson.price}
            </h1>
            <p className="text-sm font-semibold text-red-500 mb-6">
              LIMITED TIME OFFER: 20% OFF!
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {lesson.duration} of Content
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Downloadable Resources
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Certificate of Completion
              </li>
            </ul>

            <button className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150">
              Enroll Now (Paystack)
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LessonDetails;
