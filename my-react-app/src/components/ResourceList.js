import React, { useState, useEffect } from 'react';

function ResourceList({ contentType, category, showGrades = true }) {
  const [resources, setResources] = useState([]);
  const [grade, setGrade] = useState('All');

  useEffect(() => {
    const base = 'https://74123650d73d.ngrok-free.app';
    const endpoint = '/api/resources/';
    const params = new URLSearchParams();
    params.append('category', category);
    if (showGrades && grade !== 'All') {
      params.append('grade', grade);
    }
    params.append('is_video', contentType === 'Videos');
    params.append('format', 'json');
    const url = `${base}${endpoint}?${params.toString()}`;
    fetch(url, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [grade, contentType, category, showGrades]);

  return (
    <div>
      {showGrades && (
        <div className="flex justify-center items-center">
          <select onChange={e => setGrade(e.target.value)} value={grade} className="p-2 m-2 border rounded">
            <option value="All">All Grades</option>
            <option value="GRADE_11">Grade 11</option>
            <option value="GRADE_12">Grade 12</option>
            <option value="CALCULUS">Calculus</option>
            <option value="LINEAR_ALGEBRA">Linear Algebra</option>
          </select>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {resources.map(resource => (
          <div key={resource.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-4">
            <h2 className="text-xl font-bold">
              {contentType === 'Videos' ? (
                <a href={resource.video_url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
              ) : (
                <a href={resource.file} target="_blank" rel="noopener noreferrer">{resource.title}</a>
              )}
            </h2>
            <p>{resource.description}</p>
            {contentType === 'Videos' ? (
              <a href={resource.video_url} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                Watch Video
              </a>
            ) : (
              <a href={resource.file} className="text-blue-500 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                View PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceList;
