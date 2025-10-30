import React from 'react';
import LessonCard from '../LessonCard';

const allLessons = [
  {
    id: 1,
    title: 'Financial Due Diligence',
    tutor: 'Dr. Anya Sharma',
    price: 349,
    format: 'online',
    category: 'Finance',
    image:
      'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Post-Merger Integration',
    tutor: 'David Kim',
    price: 289,
    format: 'online',
    category: 'Strategy',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Legal Negotiation Tactics',
    tutor: 'Sarah Chen',
    price: 499,
    format: 'physical',
    category: 'Legal',
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Valuation Techniques',
    tutor: 'Mark Johnson',
    price: 199,
    format: 'online',
    category: 'Finance',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Corporate Strategy Frameworks',
    tutor: 'Olivia Martins',
    price: 379,
    format: 'online',
    category: 'Strategy',
    image:
      'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'M&A Legal Documentation',
    tutor: 'John Peterson',
    price: 459,
    format: 'physical',
    category: 'Legal',
    image:
      'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=800&q=80',
  },
];

const Lessons = () => {
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(500);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        M & A Lesson Catalog
      </h1>

      <div className="lg:grid lg:grid-cols-4 lg:gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 p-6 bg-gray-50 rounded-lg shadow-sm mb-8 lg:mb-0">
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
            Filter Lessons
          </h3>

          {/* Category Filter */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              id="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>All</option>
              <option>Finance</option>
              <option>Legal</option>
              <option>Strategy</option>
            </select>
          </div>

          {/* Format Filter */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Format</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="online"
                  name="format"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="online" className="ml-3 text-sm text-gray-700">
                  Online Course
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="physical"
                  name="format"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="physical" className="ml-3 text-sm text-gray-700">
                  Physical Workshop
                </label>
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <label
              htmlFor="price-range"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price Range:{' '}
              <span className="font-semibold">
                 ₦{minPrice} -  ₦{maxPrice}+
              </span>
            </label>
            <input
              id="price-range"
              type="range"
              min="0"
              max="1000"
              defaultValue="500"
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2">
            Apply Filters
          </button>
          <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Clear Filters
          </button>
        </aside>

        {/* Lesson Results */}
        <div className="lg:col-span-3">
          <p className="text-lg text-gray-600 mb-6">
            Showing <strong>{allLessons.length}</strong> Lessons
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
