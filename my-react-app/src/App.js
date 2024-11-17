import React from 'react';
import './App.css';
import ResourceList from './components/ResourceList';
import GoogleForm from './components/GoogleForm';
import DropdownMenu from './components/DropdownMenu'; // Ensure you import it
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Tutoring Site</h1>
          <p>This is where you can find resources for your courses.</p>
          <DropdownMenu />  // Use DropdownMenu here for navigation
        </header>
        <Routes>
          <Route path="/" element={<ResourceList />} />
          <Route path="/signup" element={<GoogleForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
