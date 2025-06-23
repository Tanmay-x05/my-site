import { HashRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Gallery from "./components/Gallery";
import ResumePage from "./components/ResumePage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar is rendered once and persists across routes */}
        <Sidebar />

        {/* Only this section changes with route */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
