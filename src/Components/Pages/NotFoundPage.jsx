import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      
      {/* Funny Image */}
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Funny"
        className="w-72 max-w-full animate-bounce"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold mt-6 text-red-500 animate-pulse">
        404 😵
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-600 mt-2">
        Oops! Page not found 😂
      </p>

    <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
      > 
      <Link to='/'>🔙 Back to Home</Link>
        
       </button>
    </div>
  );
};

export default NotFoundPage;