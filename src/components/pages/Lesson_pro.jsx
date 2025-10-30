import React from "react";
import { useParams, Link } from "react-router-dom";

const lessons = [
  { 
    id: 1, 
    title: "Advanced M&A Strategy", 
    tutor: "David Kim", 
    progress: 75, 
    format: "online", 
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
    description: "Learn advanced strategies for managing mergers and acquisitions effectively."
  },
  { 
    id: 2, 
    title: "Legal Negotiation Tactics", 
    tutor: "Sarah Chen", 
    progress: 50, 
    format: "physical", 
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    description: "Master the art of negotiation and conflict resolution in legal contexts."
  },
  { 
    id: 3, 
    title: "Financial Due Diligence", 
    tutor: "Dr. Anya Sharma", 
    progress: 30, 
    format: "online", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    description: "Understand the essentials of financial evaluation and reporting during mergers."
  },
];

const LessonDetails = () => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === Number(id));

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
        Lesson not found 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img src={lesson.image} alt={lesson.title} className="w-full h-64 object-cover" />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
          <p className="text-gray-600 mb-4">Taught by <span className="font-semibold">{lesson.tutor}</span></p>

          <p className="text-gray-700 mb-6">{lesson.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${lesson.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{lesson.progress}% completed</p>
          </div>

          <p className="text-sm text-gray-500">
            Format: <span className="capitalize font-medium text-gray-800">{lesson.format}</span>
          </p>

          <div className="mt-8">
            <Link
              to="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
