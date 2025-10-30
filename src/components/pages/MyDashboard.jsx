import React from 'react';
import LessonCard from '../LessonCard';

// Mock Data for Purchased Lessons
const purchasedLessons = [
  {
    id: 1,
    title: 'Advanced M&A Strategy',
    tutor: 'David Kim',
    progress: 75,
    format: 'online',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Legal Negotiation Tactics',
    tutor: 'Sarah Chen',
    progress: null,
    format: 'physical',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Financial Due Diligence',
    tutor: 'Dr. Anya Sharma',
    progress: 0,
    format: 'online',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
];

const MyDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Layout: Sidebar and Content */}
      <div className="lg:flex max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* User Content Area */}
        <div className="lg:w-4/5">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            My Courses
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {purchasedLessons.map((lesson) => (
              // dashboardView={true} activates progress/schedule view
              <LessonCard key={lesson.id} lesson={lesson} dashboardView={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
