import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link for navigation
import Homepage from "./pages/Homepage";
import Hello from "./pages/About";
import Projects from "./pages/Projects";
import './index.css'; // Assuming you have a CSS file for styling

const App = () => (
  <Router basename="/arenix">
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Use Link instead of <a> */}
          <li><Link to="/about">About</Link></li> {/* Use Link instead of <a> */}
          <li><Link to="/projects">Projects</Link></li> {/* Use Link instead of <a> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Wrap components in JSX */}
        <Route path="/about" element={<Hello />} /> {/* Wrap components in JSX */}
        <Route path="/projects" element={<Projects />} /> {/* Wrap components in JSX */}
      </Routes>
    </div>
  </Router>
);

export default App;
