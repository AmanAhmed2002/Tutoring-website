import React from 'react';
import { Link } from 'react-router-dom';

function EducationalResourcesPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Educational Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border rounded shadow-lg text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Math Resources</h2>
          <p className="text-lg text-gray-700 mb-4">
            Explore notes, videos, and educational materials tailored for Math.
          </p>
          <Link
            to="/educational-resources/math"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-700"
          >
            Go to Math Resources
          </Link>
        </div>
        <div className="p-8 border rounded shadow-lg text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Physics Resources</h2>
          <p className="text-lg text-gray-700 mb-4">
            Explore notes, videos, and educational materials tailored for Physics.
          </p>
          <Link
            to="/educational-resources/physics"
            className="bg-red-600 text-white font-bold py-2 px-4 rounded shadow hover:bg-red-700"
          >
            Go to Physics Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EducationalResourcesPage;
