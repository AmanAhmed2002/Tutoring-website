import React from 'react';
import './SubjectsPage.css';

const subjects = {
  Math: [
    { 
      name: 'General Math', 
      description: 'Covers foundational topics including arithmetic, fractions, decimals, basic geometry, and measurement. This subject lays the groundwork for advanced math courses.' 
    },
    { 
      name: 'Functions', 
      description: 'Introduces the concept of functions and relations, exploring linear, quadratic, and exponential functions. Students learn graphing techniques and real-world applications of these mathematical concepts.' 
    },
    { 
      name: 'Advanced Functions', 
      description: 'Focuses on polynomial, rational, logarithmic, and trigonometric functions. Students analyze properties, solve equations, and learn about transformations. This course prepares students for calculus.' 
    },
    { 
      name: 'Calculus', 
      description: 'Covers differentiation and integration techniques, limits, and their applications in real-world scenarios such as optimization and area under curves. This is a core course for students pursuing STEM fields.' 
    },
    { 
      name: 'Linear Algebra', 
      description: 'Explores vectors, matrices, linear transformations, and systems of linear equations. This subject is essential for students interested in engineering, physics, or computer science.' 
    },
  ],
  Science: [
    { 
      name: 'General Science', 
      description: 'Covers the basics of biology, chemistry, and physics. This course provides an overview of scientific principles and introduces students to experimentation and data analysis.' 
    },
    { 
      name: 'Physics', 
      description: 'Focuses on mechanics, energy, waves, electricity, and magnetism. Students study kinematics, forces, and the laws of motion, and explore their real-world applications.' 
    },
    { 
      name: 'Biology', 
      description: 'Explores cellular biology, genetics, ecosystems, and human anatomy. Students learn about biological diversity and processes such as photosynthesis, respiration, and reproduction.' 
    },
    { 
      name: 'Chemistry', 
      description: 'Covers atomic structure, chemical bonding, reactions, and stoichiometry. Students also explore solutions, acids, bases, and organic chemistry, preparing them for advanced scientific studies.' 
    },
  ],
  ComputerScience: [
    { 
      name: 'Programming Languages', 
      description: 'Introduces core programming concepts using Python, Java, and C++. Students learn syntax, control structures, and debugging techniques while working on practical projects.' 
    },
    { 
      name: 'Data Structures & Algorithms', 
      description: 'Covers arrays, linked lists, stacks, queues, trees, and graphs. Students learn algorithmic techniques such as sorting, searching, and dynamic programming, with a focus on problem-solving.' 
    },
    { 
      name: 'Full Stack Development', 
      description: 'Explores front-end and back-end technologies including HTML, CSS, JavaScript, and Node.js. Students build functional web applications and learn about databases and REST APIs.' 
    },
    { 
      name: 'AI & Machine Learning', 
      description: 'Introduces concepts like neural networks, supervised and unsupervised learning, and natural language processing. Students explore applications of AI in real-world scenarios.' 
    },
  ],
  English: [
    { 
      name: 'English', 
      description: 'Focuses on grammar, essay writing, and literary analysis. Students study Canadian and global literature, enhancing their critical thinking and communication skills.' 
    },
  ],
  Robotics: [
    { 
      name: 'Computer Hardware', 
      description: 'Explores the basics of computer architecture, including CPUs, RAM, and storage devices. Students learn how hardware interacts with software in various systems.' 
    },
    { 
      name: 'Arduino', 
      description: 'Covers programming microcontrollers using Arduino. Students design and build projects involving sensors, motors, and LEDs to solve real-world problems.' 
    },
    { 
      name: 'Raspberry Pi', 
      description: 'Focuses on using Raspberry Pi for programming and electronics projects. Students learn to create and implement systems like smart home devices and robotics controls.' 
    },
    { 
      name: 'Robotics Basics', 
      description: 'Introduces sensors, motors, and control systems. Students design and program basic robots to perform tasks like navigation and object detection.' 
    },
  ],
};

function SubjectsPage() {
  return (
    <div className="py-16 px-10">
      <h1 className="text-4xl font-heading font-bold text-customRed mb-8">Subjects</h1>

      {/* Introductory Section with Red Background */}
      <div className="bg-red-600 text-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-10">
        <p className="text-lg font-body text-center leading-relaxed">
          Explore the wide range of subjects we offer, taught by experienced tutors for students from grades 3 to university level. 
          If you need assistance with a subject not listed here, please let us know through the 
          <a href="/signup" className="text-yellow-400 underline"> Sign-Up Now page</a>. 
          We strive to meet all your academic needs!
        </p>
      </div>

      {/* Subject Tree */}
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
