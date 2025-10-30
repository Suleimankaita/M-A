import React from 'react';

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-xl shadow-2xl border-t-8 border-red-500">
        
        {/* Failure Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
            <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </div>
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Payment Failed.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          There was an issue processing your payment. Please verify your card details or try a different payment method.
        </p>
        
        <div className="action-buttons flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
            Try Payment Again
          </button>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition duration-150">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;