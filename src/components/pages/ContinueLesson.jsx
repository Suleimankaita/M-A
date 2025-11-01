import React, { Suspense, useState } from "react";
import { courseData } from "../data/courseData.js";

const ContinueLesson = () => {
  const [selectedVideo, setSelectedVideo] = useState(courseData.videos[0]);
  const [assignmentText, setAssignmentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Assignment submitted successfully!");
    setAssignmentText("");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 py-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
        <p className="text-gray-600">
          Tutor: <span className="font-semibold">{courseData.tutor}</span> • {courseData.category}
        </p>
      </div>

      {/* Video Player Section */}
      <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo.url}
            title={selectedVideo.title}
            allowFullScreen
            className="rounded-lg"
          ></iframe>

            

        </div>
        <h2 className="text-xl font-semibold">{selectedVideo.title}</h2>
        <p className="text-gray-500 text-sm">Duration: {selectedVideo.duration}</p>
      </div>

      {/* Video List */}
      <div className="max-w-5xl mx-auto mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseData.videos.map((video) => (
          <Suspense>

          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`cursor-pointer rounded-xl overflow-hidden border hover:shadow-md transition ${
              selectedVideo.id === video.id ? "border-indigo-500" : "border-gray-200"
            }`}
            >
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="font-semibold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-500">{video.duration}</p>
            </div>
          </div>
            </Suspense>
        ))}
      </div>

      {/* Course Description */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-3">Course Description</h2>
        <p className="text-gray-600 leading-relaxed">{courseData.description}</p>
      </div>

      {/* Assignments Section */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">Assignment from Admin</h2>
        {courseData.assignments.map((task) => (
          <div key={task.id} className="border p-4 rounded-lg mb-4 bg-gray-50">
            <h3 className="font-semibold text-gray-800">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500 mt-1">Due Date: {task.dueDate}</p>
          </div>
        ))}

        {/* Assignment Submission */}
        <form onSubmit={handleSubmit} className="mt-4">
          <textarea
            className="w-full border rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            rows="4"
            placeholder="Write your assignment here..."
            value={assignmentText}
            onChange={(e) => setAssignmentText(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContinueLesson;
