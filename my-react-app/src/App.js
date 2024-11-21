import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleForm from './components/GoogleForm';
import EducationalResourcesPage from './components/EducationalResourcesPage';
import SubjectsPage from './components/SubjectsPage'; // New Subjects Page Import
import DropdownMenu from './components/DropdownMenu'; // Existing Dropdown Menu
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-white">
        {/* Header */}
        <header className="bg-red-600 text-white p-4 flex justify-end">
          <DropdownMenu />
        </header>

        {/* Main Routes */}
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <main className="text-gray-800">
                {/* Section 1: Welcome */}
                <section className="bg-customYellow py-16 px-10 text-center flex flex-col md:flex-row items-center justify-center">
                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img
                      src={require('./assets/images/online-tutoring-session.jpeg')}
                      alt="Online tutoring session"
                      className="rounded-lg shadow-lg max-w-full h-auto mr-8"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2 text-left ml-8">
                    <h1 className="text-5xl font-heading font-bold text-white bg-customRed py-3 px-6 inline-block rounded-md">
                      Welcome to Elevate IQ
                    </h1>
                    <p className="text-xl font-body font-bold mt-6 max-w-4xl mx-auto leading-relaxed">
                      Elevate IQ provides affordable and highly effective online tutoring for students
                      of all ages. With flexible schedules, expert tutors, and personalized learning plans, 
                      we help students achieve their academic goals and unlock their full potential.
                    </p>
                  </div>
                </section>

                {/* Section 2: About Us */}
                <section className="py-16 px-10 text-center bg-white">
                  <h2 className="text-4xl font-heading font-bold text-customRed mb-6">About Us</h2>
                  <p className="text-lg font-body leading-relaxed">
                    Elevate IQ is a proudly GTA-based online tutoring service, founded with the mission of 
                    making high-quality education accessible and affordable for all. With a focus on providing 
                    competitive rates, we aim to alleviate the financial burden often associated with tutoring services.
                  </p>
                  <p className="text-lg font-body leading-relaxed mt-6">
                    Our team of highly experienced tutors specializes in subjects spanning from grades 3 to university, 
                    ensuring tailored support for every student. The founder, a former biomedical engineer, established 
                    Elevate IQ to help students who require assistance but struggle with the high costs of traditional tutoring.
                  </p>
                  <p className="text-lg font-body leading-relaxed mt-6">
                    At Elevate IQ, we believe every student deserves the opportunity to excel academically, regardless of 
                    their financial background. Our personalized approach ensures each student receives the attention they need 
                    to succeed and grow.
                  </p>
                </section>

                {/* Section 3: Why Choose Elevate IQ */}
                <section className="py-16 px-10 text-center bg-white flex flex-col md:flex-row items-center justify-center">
                  {/* Text */}
                  <div className="w-full md:w-1/2 text-left">
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
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                      src={require('./assets/images/CalendarDrawing.jpeg')}
                      alt="Calendar illustration"
                      className="rounded-lg shadow-lg max-w-sm h-auto ml-8"
                    />
                  </div>
                </section>

                {/* Section 4: Unique Lesson Plans */}
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

                {/* Section 5: Services Offered */}
                <section className="bg-white py-16 px-10 text-center">
                  <h2 className="text-4xl font-heading font-bold text-customRed mb-6">Our Services</h2>
                  <p className="text-lg font-body leading-relaxed max-w-4xl mx-auto mb-10">
                    At Elevate IQ, we are committed to offering affordable, high-quality tutoring services. 
                    Every student receives a <strong>free trial session</strong> to ensure satisfaction, along with 
                    access to a wealth of <strong>free educational resources</strong> like notes and videos, 
                    available on our Educational Resources page. Let us help your child excel with expert tutoring 
                    in a wide range of subjects.
                  </p>
                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="/signup" className="bg-customRed text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-red-700">
                      Sign Up Now
                    </a>
                    <a href="/subjects" className="bg-customYellow text-red-600 font-bold py-2 px-4 rounded-md shadow-md hover:bg-yellow-500">
                      Subjects
                    </a>
                    <button className="bg-customYellow text-red-600 font-bold py-2 px-4 rounded-md shadow-md hover:bg-yellow-500" disabled>
                      Pricing Plans
                    </button>
                    <a href="/educational-resources" className="bg-customRed text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-red-700">
                      Educational Resources
                    </a>
                  </div>
                </section>
              </main>
            }
          />

          {/* Sign-Up Page */}
          <Route path="/signup" element={<GoogleForm />} />

          {/* Educational Resources Page */}
          <Route path="/educational-resources" element={<EducationalResourcesPage />} />

          {/* Subjects Page */}
          <Route path="/subjects" element={<SubjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
