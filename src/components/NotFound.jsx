// src/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 3 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg">You’ll be redirected to the homepage shortly...</p>
    </div>
  );
};

export default NotFound;
