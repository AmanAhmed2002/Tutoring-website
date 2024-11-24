import React from 'react';
import ResourceList from './ResourceList'; // Reusing ResourceList component

function EducationalResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Educational Resources</h1>
      {/* Separate Notes and Videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-center my-4">Notes</h2>
          <ResourceList isVideo={false} /> {/* For Notes */}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center my-4">Videos</h2>
          <ResourceList isVideo={true} /> {/* For Videos */}
        </div>
      </div>
    </div>
  );
}

export default EducationalResourcesPage;
