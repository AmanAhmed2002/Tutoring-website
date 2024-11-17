import React, { useState, useEffect } from 'react';

function ResourceList() {
  const [resources, setResources] = useState([]);
  const [category, setCategory] = useState('All');
  const [grade, setGrade] = useState('All');

  useEffect(() => {
    let url = 'http://127.0.0.1:8000/api/resources/';
    if (category !== 'All') {
      url += `?category=${category}`;
      if (grade !== 'All' && category === 'MATH') {
        url += `&grade=${grade}`;
      }
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [category, grade]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Educational Resources</h1>
      <div className="flex justify-center items-center">
        <select onChange={e => setCategory(e.target.value)} className="p-2 m-2 border rounded">
          <option value="All">All Categories</option>
          <option value="MATH">Math</option>
          <option value="PHYSICS">Physics</option>
        </select>
        {category === 'MATH' && (
          <select onChange={e => setGrade(e.target.value)} className="p-2 m-2 border rounded">
            <option value="All">All Grades</option>
            <option value="GRADE_11">Grade 11</option>
            <option value="GRADE_12">Grade 12</option>
            <option value="CALCULUS">Calculus</option>
            <option value="LINEAR_ALGEBRA">Linear Algebra</option>
          </select>
        )}
        {/* Add similar conditional dropdown for PHYSICS if needed */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {resources.map(resource => (
          <div key={resource.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
            <h2 className="text-xl font-bold">{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceList;
