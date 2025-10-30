import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Uncomment this in your final app

const PaymentSuccess = () => {
  // const navigate = useNavigate(); // Uncomment this in your final app
  
  // // Mock useEffect for redirection logic
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/my-lessons');
  //   }, 5000);
  //   return () => clearTimeout(timer); 
  // }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-xl shadow-2xl border-t-8 border-green-500">
        
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Payment Successful! 🎉
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your purchase. You now have immediate access to your lesson content.
        </p>
        
        <a href="/my-lessons" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
          Go to My Lessons
        </a>
        <p className="mt-4 text-sm text-gray-500">
            (You will be redirected automatically in 5 seconds)
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;