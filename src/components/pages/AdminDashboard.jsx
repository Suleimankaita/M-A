import React from 'react';
// You'll need to use Link/NavLink from 'react-router-dom' for actual navigation
// import { NavLink } from 'react-router-dom'; 

// Basic list of navigation items for the Admin sidebar
const adminNavItems = [
  { name: 'Overview', icon: '📊', href: '#overview' },
  { name: 'Users', icon: '👤', href: '#users' },
  { name: 'Lessons', icon: '📚', href: '#lessons' },
  { name: 'Orders', icon: '🛒', href: '#orders' },
  { name: 'Settings', icon: '⚙️', href: '#settings' },
];

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-400">Admin Panel</h2>
          <p className="text-xs text-gray-400">M&A Academy</p>
        </div>
        
        <nav className="mt-6">
          {adminNavItems.map((item) => (
            // In a real app, use <NavLink> for active styling
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center px-6 py-3 transition duration-200 ${
                item.name === 'Overview' 
                  ? 'bg-indigo-600 border-l-4 border-indigo-300' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
          
          {/* Logout/Back to Site Link */}
          <div className="mt-10 pt-4 border-t border-gray-700">
            <a href="/" className="flex items-center px-6 py-3 text-red-400 hover:text-red-300 transition duration-200">
              <span className="mr-3 text-lg">🏠</span>
              <span className="font-medium">Back to Site</span>
            </a>
          </div>
          
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Quick snapshot of the platform's performance.</p>
        </header>

        {/* --- Key Metrics (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <DashboardCard title="Total Users" value="2,450" icon="👥" color="bg-blue-500" />
          <DashboardCard title="Active Lessons" value="18" icon="📘" color="bg-green-500" />
          <DashboardCard title="New Orders (30 Days)" value="124" icon="💸" color="bg-yellow-500" />
          <DashboardCard title="Revenue (MTD)" value="$45,670" icon="📈" color="bg-indigo-500" />
          
        </div>

        {/* --- Recent Activity/Tables Section --- */}
        <div className="mt-10 bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Enrollments</h2>
          
          {/* Placeholder for a table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lesson</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Valuation Modeling</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Oct 25, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LBO Basics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Oct 24, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </main>
    </div>
  );
};

// Simple reusable card component for metrics
const DashboardCard = ({ title, value, icon, color }) => (
  <div className={`p-6 ${color} rounded-xl shadow-lg flex items-center justify-between text-white`}>
    <div>
      <p className="text-sm font-medium opacity-80">{title}</p>
      <p className="text-3xl font-extrabold mt-1">{value}</p>
    </div>
    <div className="text-4xl opacity-50">{icon}</div>
  </div>
);

export default AdminDashboard;