import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log In to Your M&A Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <label htmlFor="email-address" className="sr-only ">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
              Sign in
            </button>
          </div>
        </form>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
        </div>
        
        <button className="w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150">
          {/* Using a placeholder for the Google icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0001 4.75C14.0201 4.75 15.8201 5.46 17.2001 6.78L20.2401 3.75C18.0001 1.76 15.1701 0.75 12.0001 0.75C7.0601 0.75 2.7201 3.65 0.7501 7.42L5.2701 10.99C6.3501 7.78 8.8701 4.75 12.0001 4.75Z" fill="#EA4335"/><path d="M23.25 12.0001C23.25 11.2301 23.18 10.4601 23.04 9.7101H12V14.2401H18.42C18.15 15.6801 17.3 16.9201 16.03 17.7801L20.55 21.3501C21.99 19.9601 23.25 18.0601 23.25 12.0001Z" fill="#4285F4"/><path d="M5.2701 10.9901L0.7501 7.4201C0.5801 8.3501 0.4901 9.3201 0.4901 10.3101C0.4901 12.3101 0.9401 14.1901 1.7601 15.8701L6.2901 12.3001C6.0101 11.8301 5.4801 11.4101 5.2701 10.9901Z" fill="#FBBC05"/><path d="M12.0001 23.25C15.1701 23.25 17.8901 22.21 19.9001 20.44L16.0301 17.78C15.0101 18.49 13.6201 18.99 12.0001 18.99C8.8701 18.99 6.3501 17.78 5.2701 14.57L0.7501 18.14C2.7201 21.91 7.0601 23.25 12.0001 23.25Z" fill="#34A853"/></svg>
          Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Not a member? {' '}
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Create an Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;