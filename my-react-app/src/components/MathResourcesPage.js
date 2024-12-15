import React, { useState } from 'react';
import ResourceList from './ResourceList';

function MathResourcesPage() {
  const [contentType, setContentType] = useState('Notes'); // Tracks Notes or Videos selection

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Math Resources</h1>

      {/* Dropdown for Notes or Videos */}
      <div className="flex justify-center space-x-4 mb-8">
        <select
          className="text-black px-4 py-2 rounded-md"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="Notes">Notes</option>
          <option value="Videos">Videos</option>
        </select>
      </div>

      {/* Resource List Component */}
      <ResourceList contentType={contentType} category="MATH" />
    </div>
  );
}

export default MathResourcesPage;
