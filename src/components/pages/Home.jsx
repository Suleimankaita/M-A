
import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      {/* Navbar */}
      
      {/* Hero Section */}
      <section
        className="bg-cover h-full bg-center pt-28 pb-16 md:py-32 "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Master the Art of M & A.<br /> Your Future Starts Here
          </h1>
          <p className="mb-6 text-sm md:text-lg text-gray-100">
            Unlock your potential with expert-led courses and accelerate your career in mergers and acquisitions.
          </p>
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700">
            View Lessons
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 mt-10 md:mt-0">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Tuniset", quote: "This platform changed my career trajectory!" },
              { name: "Paul", quote: "This platform changed my acclearn trajectory!" },
              { name: "Sarah", quote: "An amazing experience with real-world insights!" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center bg-white shadow-sm rounded-xl p-4"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 30}.jpg`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="italic text-gray-700 text-sm md:text-base">"{t.quote}"</p>
                  <p className="font-medium mt-2 text-sm">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Lessons */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
            Upcoming Lessons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Financial Modeling Pro",
                author: "Sarah Chen",
                date: "Oct 26, 2023",
                img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Deal Negotiation Tactics",
                author: "David Kim",
                date: "Nov 1, 2023",
                img: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Legal Aspects of M&A",
                author: "Dr. Anya Sharma",
                date: "Nov 8, 2023",
                img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
              },
            ].map((lesson, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-4"
              >
                <img
                  src={lesson.img}
                  alt={lesson.title}
                  className="rounded-lg w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{lesson.author}</p>
                <p className="text-sm text-gray-500 mt-1">{lesson.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// // import React, { useState } from 'react';

// // // --- DATA STRUCTURES (Mock Data) ---
// // const mockLessons = [
// //   { id: 1, title: "Financial Due Diligence", instructor: "David Kim", date: "Nov 2, 2023", price: null, imageDesc: "📊 Chart" },
// //   { id: 2, title: "Financial Due Diligence", instructor: "David Kim", date: "Nov 3, 2023", price: null, imageDesc: "🤝 Handshake" },
// //   { id: 3, title: "Successful M&A", instructor: "Dr. Anya Sharma", date: "Nov 4, 2023", price: null, imageDesc: "👤 Avatar" },
// //   { id: 4, title: "Financial Due Diligence", instructor: "David Kim", date: "Nov 8, 2023", price: null, imageDesc: "👤 Avatar" },
// //   { id: 5, title: "Post-Merger Integration", instructor: "Dr. Anya Sharma", date: "Nov 9, 2023", price: null, imageDesc: "👤 Avatar" },
// //   { id: 6, title: "Post-Merger Integration", instructor: "Dr. Anya Sharma", date: "Nov 9, 2023", price: 349, imageDesc: "👤 Avatar" },
// //   { id: 7, title: "Deal Negotiation Tactics", instructor: "Dr. Anya Sharma", date: "Nov 22, 2023", price: 349, imageDesc: "👤 Avatar" },
// //   { id: 8, title: "Legal Negotiation Tactics", instructor: "David Kim", date: "Nov 8, 2023", price: 349, imageDesc: "👤 Avatar" },
// //   { id: 9, title: "Legal Aspaction Tactics", instructor: "David Kim", date: "Nov 9, 2023", price: 349, imageDesc: "💻 Laptop" },
// // ];

// // // --- 1. HEADER Component (Reused from previous design) ---
// // const Header = () => (
// //     <header className="bg-white border-b border-gray-200">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
// //         {/* Logo (M&A) */}
// //         <div className="flex items-center">
// //           <span className="text-3xl font-black text-blue-800">M&amp;A</span>
// //           <span className="text-3xl font-black text-orange-600">A</span>
// //         </div>

// //         {/* Navigation */}
// //         <nav className="hidden md:flex space-x-8 text-gray-700 font-medium text-lg">
// //           <a href="#" className="hover:text-blue-600">Home</a>
// //           <a href="#" className="hover:text-blue-600">Lessons</a>
// //           <a href="#" className="hover:text-blue-600">My Lessons</a>
// //           <a href="#" className="hover:text-blue-600">About</a>
// //         </nav>

// //         {/* Login/Register Button (Solid Blue background) */}
// //         <a href="#" className="px-5 py-2 border border-transparent text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition duration-150">
// //           Login/Register
// //         </a>
// //       </div>
// //     </header>
// // );

// // // --- 2. LESSON CARD Component ---
// // const LessonCard = ({ lesson }) => {
// //   const isPaid = lesson.price !== null;
  
// //   return (
// //     <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      
// //       {/* Image/Content Area */}
// //       <div className="p-4 flex flex-col justify-between h-48">
        
// //         {/* Top Section (Image/Title) */}
// //         <div className="flex-1">
// //           <div className={`flex justify-center items-center h-20 bg-gray-50 rounded mb-3`}>
// //             <span className="text-center text-gray-500 text-sm">{lesson.imageDesc}</span>
// //           </div>
// //           <h3 className="text-lg font-semibold text-gray-900 leading-snug">{lesson.title}</h3>
// //         </div>
        
// //         {/* Instructor/Date */}
// //         <div className="mt-2">
// //           <p className="text-sm text-gray-600">{lesson.instructor}</p>
// //           <p className="text-xs text-gray-500 mt-0.5">{lesson.date}</p>
// //         </div>
// //       </div>
      
// //       {/* Footer (Price/Buttons) */}
// //       <div className={`p-4 border-t ${isPaid ? 'bg-gray-50' : 'bg-white'} flex justify-between items-center`}>
// //         {isPaid ? (
// //           <div className="flex flex-col">
// //             <span className="text-2xl font-bold text-blue-600">${lesson.price}</span>
// //           </div>
// //         ) : (
// //           <span className="text-sm font-semibold text-green-600">Free</span>
// //         )}
        
// //         <div className="flex space-x-2">
// //           <button className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
// //             View Details
// //           </button>
// //           {isPaid && (
// //             <button className="px-3 py-1 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600">
// //               Buy Now
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // // --- 3. FILTER SIDEBAR Component ---
// // const LessonFilters = () => (
// //   <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 sticky top-24">
// //     <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Filters</h2>
    
// //     <div className="space-y-6">
      
// //       {/* Category Filter */}
// //       <div>
// //         <label className="block text-md font-semibold text-gray-700 mb-2">Category</label>
// //         <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
// //           <option>Finance</option>
// //           <option>Strategy</option>
// //           <option>Legal</option>
// //         </select>
// //       </div>

// //       {/* Format Filter (Switches) */}
// //       <div className="border-t pt-4">
// //         <label className="block text-md font-semibold text-gray-700 mb-2">Format</label>
// //         <div className="space-y-3">
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-600">Online</span>
// //             <input type="checkbox" className="h-5 w-10 rounded-full appearance-none bg-gray-300 checked:bg-blue-500 transition duration-200 cursor-pointer" />
// //           </div>
// //           <div className="flex justify-between items-center">
// //             <span className="text-gray-600">Strategy</span>
// //             <select className="p-1 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500">
// //                 <option>All</option>
// //             </select>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Duration Filter (Slider/Range) */}
// //       <div className="border-t pt-4">
// //         <label className="block text-md font-semibold text-gray-700 mb-2">Duration</label>
// //         <div className="flex justify-between items-center">
// //             <span className="text-gray-600">Physical</span>
// //             <input type="checkbox" className="h-5 w-10 rounded-full appearance-none bg-blue-500 transition duration-200 cursor-pointer" defaultChecked />
// //         </div>
// //       </div>

// //       {/* Price Range */}
// //       <div className="border-t pt-4">
// //         <label className="block text-md font-semibold text-gray-700 mb-2">Price Range</label>
// //         <div className="flex space-x-2 text-sm text-gray-600 mb-2">
// //             <span>$0</span>
// //             <div className="flex-1 bg-gray-300 h-1.5 rounded-full mt-1.5">
// //                 <div className="h-1.5 bg-blue-500 w-3/4 rounded-full"></div> {/* Placeholder for range */}
// //             </div>
// //             <span>$500+</span>
// //         </div>
// //         <div className="flex space-x-2">
// //           <select className="flex-1 p-2 border border-gray-300 rounded-md text-sm">
// //             <option>$100</option>
// //             <option>$600</option>
// //           </select>
// //           <select className="flex-1 p-2 border border-gray-300 rounded-md text-sm">
// //             <option>$500</option>
// //             <option>$1000</option>
// //           </select>
// //         </div>
// //       </div>
      
// //       {/* Duration Radio Buttons */}
// //       <div className="border-t pt-4">
// //         <label className="block text-md font-semibold text-gray-700 mb-2">Duration</label>
// //         <div className="flex justify-between items-center">
// //           <div className="text-gray-600 flex items-center">
// //               <input type="radio" name="duration" defaultChecked className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
// //               <span className="ml-2">Short</span>
// //           </div>
// //           <div className="text-gray-600 flex items-center">
// //               <input type="radio" name="duration" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
// //               <span className="ml-2">Medium</span>
// //           </div>
// //         </div>
// //       </div>

// //     </div>
    
// //     {/* Action Buttons */}
// //     <div className="mt-8 space-y-3">
// //       <button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition duration-150">
// //         Buy Now
// //       </button>
// //       <button className="w-full py-2 text-blue-600 bg-white border border-blue-600 hover:bg-blue-50 rounded-md font-medium transition duration-150">
// //         Clear Details
// //       </button>
// //     </div>
// //   </div>
// // );


// // // --- MAIN LESSONS PAGE Component ---
// // const Lessons = () => {
// //   // In a real app, you would use state to manage filters and lesson data
// //   const [lessons] = useState(mockLessons);

// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       <Header />
      
// //       {/* Testimonial Banner */}
// //       <div className="bg-white border-b border-gray-200 shadow-sm">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center">
// //               <span className="text-lg italic text-gray-700 flex items-center">
// //                   <span className="text-xl mr-3"></span>
// //                   "This platform changed changed my acclresen trajectory!"
// //                   <span className="text-xl ml-3"></span>
// //               </span>
// //           </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
// //           {/* Filter Sidebar (Col 1-3) */}
// //           <div className="lg:col-span-3">
// //             <LessonFilters />
// //           </div>
          
// //           {/* Lesson Grid (Col 4-12) */}
// //           <div className="lg:col-span-9">
            
// //             {/* Lessons Header/Search Bar */}
// //             <div className="flex justify-between items-center mb-6">
// //               <h2 className="text-2xl font-bold text-gray-800">Upcoming Lessons</h2>
// //               <div className="flex items-center space-x-4">
// //                 <span className="text-gray-600 text-sm">Showing {lessons.length} Lessons</span>
// //                 <input 
// //                   type="text" 
// //                   placeholder="Search..." 
// //                   className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-40" 
// //                 />
// //               </div>
// //             </div>
            
// //             {/* Lesson Grid */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
// //               {lessons.map(lesson => (
// //                 <LessonCard key={lesson.id} lesson={lesson} />
// //               ))}
// //             </div>

// //           </div>
// //         </div>
// //       </div>
      
// //       {/* Assuming the Footer is handled by the overall layout or omitted */}
// //     </div>
// //   );
// // };

// // export default Lessons;

