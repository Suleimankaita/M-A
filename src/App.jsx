

import React from 'react';
// We use BrowserRouter only once in index.js, so we import { Routes, Route } here.
// NOTE: Since you imported `BrowserRouter as Router` above, I'll keep it for now, 
// but it's redundant if you wrapped your app in index.js.
import {  Route ,Routes} from 'react-router-dom'; 

// --- LAYOUT COMPONENTS ---
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// A layout wrapper for public pages (with Header and Footer)
const MainLayout = ({ children }) => (
  <>
    <main className="min-h-[80vh]">{children}</main>
  </>
);

// A layout wrapper for Auth/Admin pages (minimal)
const MinimalLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">{children}</div>
);


// --- PAGE COMPONENTS ---
import Ls from "./LS"
import Home from './components/pages/Home';
// Corrected import path assuming 'Lessons' is in 'Lessons.jsx'
// If your file is named 'Lesson.jsx', keep the original, but common naming is Lessons.jsx
import Lessons from './components/pages/Lesson'; 
import LessonDetails from './components/pages/LessonDetails';
import MyDashboard from './components/pages/MyDashboard';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import PaymentSuccess from './components/pages/Payment/PaymentSuccess';
import PaymentFailure from './components/pages/Payment/PaymentFailure';
import AdminDashboard from './components/pages/AdminDashboard'; 
import ContinueLesson from './components/pages/ContinueLesson'; 
import Layout from './components/layout/Layout';
import Pay from "./components/pages/Pay"

function App() {
  return (
    // If you already wrapped your app in <BrowserRouter> in index.js, remove <Router> here.
    // I'm keeping it for now based on your code, but it's typically done only once in the root.
    <Routes>
         <Route path="/Pay" element={<Pay />} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 

    <Route path='/' element={<Layout/>}>
            
        {/* ========================================================== */}
        {/* 1. PUBLIC ROUTES (Using MainLayout) - CORRECTED USAGE */}
        {/* Pass the page component as a child inside the layout component in the 'element' prop */}
        {/* ========================================================== */}
        
        <Route index element={<Home />}/>
        {/* <Route index element={<Ls/>}/> */}
        <Route path="/lessons" >
        <Route index element={<Lessons />}/>
        <Route path="/lessons/:id" element={<MainLayout><LessonDetails /></MainLayout>} />
        </Route>
         
        {/* ========================================================== */}
        {/* 2. USER DASHBOARD */}
        {/* ========================================================== */}
        
        <Route path="/my-dashboard" >
        <Route index element={<MyDashboard />} />
        <Route path="/my-dashboard/:id" element={<ContinueLesson />}/>
      
        </Route>

        {/* ========================================================== */}
        {/* 3. AUTH ROUTES (Using MinimalLayout) */}
        {/* ========================================================== */}
        

        {/* ========================================================== */}
        {/* 4. PAYMENT ROUTES (Using MinimalLayout) */}
        {/* ========================================================== */}

        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failure" element={<PaymentFailure />} />

        {/* ========================================================== */}
        {/* 5. ADMIN ROUTE */}
        {/* ========================================================== */}
        
        <Route path="/admin" element={<AdminDashboard />} />

        {/* ========================================================== */}
        {/* 6. 404 CATCH-ALL ROUTE - CORRECTED USAGE */}
        {/* ========================================================== */}
        <Route 
          path="*" 
          element={
            <MinimalLayout>
              <div className="text-center py-20">
                <h1 className="text-6xl font-extrabold text-indigo-600">404</h1>
                <p className="text-xl text-gray-700 mt-4">Page Not Found</p>
                <a href="/" className="mt-6 inline-block text-indigo-600 hover:text-indigo-800">Go Home</a>
              </div>
            </MinimalLayout>
          } 
        /> 

      </Route>
    </Routes>

  );
}

export default App;


// import React from 'react'
// import Ls from "./LS"
// import { Route,Routes } from 'react-router-dom'
// const App = () => {
//   return (
//     <Routes>
//       <Route path='/'>
//       <Route index element={<Ls/>} />
//       </Route>
//     </Routes>
//   )
// }

// export default App
