import React from 'react';
import ResourceList from './ResourceList'; // Reusing ResourceList component

function EducationalResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Educational Resources</h1>
      <ResourceList />
    </div>
  );
}

export default EducationalResourcesPage;
