import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="app-layout">
        {/* Static Sidebar */}
        <aside className="sidebar">
          <Sidebar />
        </aside>

        {/* Scrollable Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
