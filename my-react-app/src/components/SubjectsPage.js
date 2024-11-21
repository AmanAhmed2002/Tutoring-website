import React from 'react';
import './SubjectsPage.css';

const subjects = {
  Math: [
    { name: 'General Math', description: 'Covers basic arithmetic, geometry, and foundational concepts.' },
    { name: 'Functions', description: 'Explores relations, functions, and graphing.' },
    { name: 'Advanced Functions', description: 'Focuses on polynomial, exponential, and logarithmic functions.' },
    { name: 'Calculus', description: 'Introduces differentiation and integration techniques.' },
    { name: 'Linear Algebra', description: 'Studies vectors, matrices, and linear transformations.' },
  ],
  Science: [
    { name: 'General Science', description: 'Covers foundational topics across biology, chemistry, and physics.' },
    { name: 'Physics', description: 'Focuses on mechanics, electricity, and thermodynamics.' },
    { name: 'Biology', description: 'Explores cellular biology, genetics, and ecosystems.' },
    { name: 'Chemistry', description: 'Covers chemical reactions, periodic table, and bonding.' },
  ],
  ComputerScience: [
    { name: 'Programming Languages', description: 'Teaches Python, Java, and other languages.' },
    { name: 'Data Structures & Algorithms', description: 'Focuses on arrays, trees, graphs, and sorting algorithms.' },
    { name: 'Full Stack Development', description: 'Covers front-end and back-end technologies.' },
    { name: 'AI & Machine Learning', description: 'Explores neural networks and data analysis techniques.' },
  ],
  English: [
    { name: 'English', description: 'Focuses on grammar, literature, and essay writing.' },
  ],
  Robotics: [
    { name: 'Computer Hardware', description: 'Covers hardware basics and assembly.' },
    { name: 'Arduino', description: 'Programming microcontrollers for real-world applications.' },
    { name: 'Raspberry Pi', description: 'Explores small computers for robotics projects.' },
    { name: 'Robotics Basics', description: 'Introduction to sensors, motors, and design.' },
  ],
};

function SubjectsPage() {
  return (
    <div className="py-16 px-10">
      <h1 className="text-4xl font-heading font-bold text-customRed mb-8">Subjects</h1>
      <div className="subject-tree">
        {Object.entries(subjects).map(([subject, branches]) => (
          <div className="subject-branch" key={subject}>
            <div className="subject-name">{subject}</div>
            <div className="branch-list">
              {branches.map((branch) => (
                <div className="branch-item" key={branch.name}>
                  <span className="branch-title">{branch.name}</span>
                  <div className="branch-description">{branch.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectsPage;
