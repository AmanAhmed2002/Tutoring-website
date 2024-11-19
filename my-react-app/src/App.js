import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleForm from './components/GoogleForm';
import EducationalResourcesPage from './components/EducationalResourcesPage';
import DropdownMenu from './components/DropdownMenu'; // Import the DropdownMenu component
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-white">
        {/* Header */}
        <header className="bg-red-600 text-white p-4 flex justify-end">
          <DropdownMenu /> {/* Use the DropdownMenu component here */}
        </header>

        {/* Main Routes */}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <main className="text-gray-800">
                {/* Section 1: Welcome */}
                <section className="bg-customYellow py-16 px-10 text-center">
                  <h1 className="text-5xl font-heading font-bold text-white bg-customRed py-3 px-6 inline-block rounded-md">
                    Welcome to Elevate IQ
                  </h1>
                  <p className="text-xl font-body font-bold mt-6 max-w-4xl mx-auto leading-relaxed">
                    Elevate IQ provides affordable and highly effective online tutoring for students
                    of all ages. With flexible schedules, expert tutors, and personalized learning plans, 
                    we help students achieve their academic goals and unlock their full potential.
                  </p>
                </section>

                {/* Section 2: Why Choose Elevate IQ */}
                <section className="py-16 px-10 text-center bg-white">
                  <h2 className="text-4xl font-heading font-bold text-customRed mb-6">Why Choose Elevate IQ?</h2>
                  <div className="mt-6 bg-customYellow shadow-md rounded-lg p-8 max-w-4xl mx-auto">
                    <p className="text-lg font-body leading-relaxed">
                      <strong className="font-bold">Personalized Attention:</strong> 
                      Our one-on-one or small group tutoring sessions provide tailored learning experiences. 
                      Each student receives focused guidance and constructive feedback to address their unique 
                      challenges and maximize their strengths.
                    </p>
                    <p className="text-lg font-body mt-6 leading-relaxed">
                      <strong className="font-bold">Flexible Schedules:</strong> 
                      Learning that fits into your life. With no commute and full control over your study schedule, 
                      students can balance academics with extracurricular activities, work, or family time seamlessly.
                    </p>
                  </div>
                </section>

                {/* Section 3: Unique Lesson Plans */}
                <section className="bg-customRed py-16 px-10 text-center">
                  <h2 className="text-4xl font-heading font-bold text-customYellow mb-6">Unique Lesson Plans</h2>
                  <p className="text-xl font-body max-w-4xl mx-auto leading-relaxed text-white">
                    At Elevate IQ, we create lesson plans tailored to each student’s needs. 
                    By focusing on their strengths and addressing areas for improvement, our 
                    lessons ensure steady progress, build confidence, and develop a love for learning.
                  </p>
                  <p className="text-xl font-body max-w-4xl mx-auto leading-relaxed mt-6 text-white">
                    Our tutors incorporate modern teaching techniques, engaging materials, and 
                    real-world applications to make learning interactive and impactful.
                  </p>
                </section>
              </main>
            }
          />

          {/* Other Pages */}
          <Route path="/signup" element={<GoogleForm />} />
          <Route path="/educational-resources" element={<EducationalResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
