import React, { useState, useEffect } from 'react';

function ResourceList({ isVideo }) {
  const [resources, setResources] = useState([]);
  const [category, setCategory] = useState('All');
  const [grade, setGrade] = useState('All');

  useEffect(() => {
    // Initialize query parameters based on category, grade, and isVideo selections
    let url = 'http://127.0.0.1:8000/api/resources/';
    const params = new URLSearchParams();
    if (category !== 'All') {
      params.append('category', category);
    }
    if (grade !== 'All' && category !== 'All') {
      params.append('grade', grade);
    }
    params.append('is_video', isVideo); // Add the filter for video or note
    fetch(`${url}?${params.toString()}`)
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [category, grade, isVideo]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <select onChange={e => { setCategory(e.target.value); setGrade('All'); }} value={category} className="p-2 m-2 border rounded">
          <option value="All">All Categories</option>
          <option value="MATH">Math</option>
          <option value="PHYSICS">Physics</option>
        </select>
        {category === 'MATH' && (
          <select onChange={e => setGrade(e.target.value)} value={grade} className="p-2 m-2 border rounded">
            <option value="All">All Grades</option>
            <option value="GRADE_11">Grade 11</option>
            <option value="GRADE_12">Grade 12</option>
            <option value="CALCULUS">Calculus</option>
            <option value="LINEAR_ALGEBRA">Linear Algebra</option>
          </select>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {resources.map(resource => (
          <div key={resource.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
            <h2 className="text-xl font-bold">
              {isVideo ? (
                <a href={resource.video_url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
              ) : (
                <a href={resource.file} target="_blank" rel="noopener noreferrer">{resource.title}</a>
              )}
            </h2>
            <p>{resource.description}</p>
            {isVideo ? (
              <a href={resource.video_url} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Watch Video</a>
            ) : (
              <a href={resource.file} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">View PDF</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceList;
