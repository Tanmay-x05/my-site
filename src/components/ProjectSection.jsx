import { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectSection.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    title: "Skills Extraction from Job Descriptions",
    objective:
      "To build a system that automates the extraction of key skills from job descriptions, helping align candidate profiles with employer requirements.",
    tools: "Python, Selenium, Scrapy, BeautifulSoup, spaCy, Pandas",
    results: `Successfully scraped job listings from platforms like Naukri and parsed them to extract domain-relevant technical and soft skills.
Used NLP techniques to filter out redundant words and highlight industry-specific skills.
Output structured into CSV and JSON formats for further analysis or integration into resume analyzers or HR dashboards.`,
    github: "https://github.com/Tanmay-x05/skills-extraction",
  },
  {
    title: "Text Detection and Speech Conversion (OCR-Based Assistant)",
    objective:
      "To create an assistive AI tool that detects text from images and converts it into speech, supporting accessibility for the visually impaired.",
    tools:
      "Python, OpenCV, Pytesseract (Tesseract OCR), pyttsx3, Google Text-to-Speech, SpeechRecognition",
    results: `Enabled real-time extraction and reading of printed and handwritten text using a camera or uploaded images.
Integrated voice input for language translation, allowing multilingual speech output.
Can be deployed as an educational or accessibility tool for users with vision or language barriers.`,
    github: "https://github.com/Tanmay-x05/Picto-Speak",
  },
  {
    title: "Image Classification Using CNN (Dogs vs. Cats and Beyond)",
    objective:
      "To develop a deep learning model that classifies images into categories such as dogs and cats using Convolutional Neural Networks.",
    tools: "Python, TensorFlow, Keras, NumPy, Matplotlib, Google Colab",
    results: `Achieved 90%+ classification accuracy on a binary dataset (dogs vs. cats).
Implemented model training, validation, and testing phases with data augmentation.
Demonstrated scalability to other image classes with retraining.`,
    github: "https://github.com/Tanmay-x05/image-classification",
  },
  {
    title: "Sustainable Harvest Solutions – Agricultural DBMS Project",
    objective:
      "To design and implement a comprehensive database management system for sustainable farming support, subsidy tracking, and crop cost analysis.",
    tools:
      "Oracle SQL, PL/SQL, ER Modeling, Stored Procedures, Triggers, Normalization",
    results: `Designed normalized schema with interlinked tables for users, crops, fertilizers, herbicides, market rates, and subsidies.
Built functions to automate cost calculations and stored procedures for fertilizer recommendations.
Developed triggers for validation and logging; provided query-based insights into best crop-market combinations and subsidy eligibility.`,
    github: "https://github.com/Tanmay-x05/Sustainable-Harvest-Solutions",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="project-section" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="project-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="project-title" onClick={() => toggle(index)}>
              <div className="title-text">{project.title}</div>
              <div
                className={`toggle-icon ${activeIndex === index ? "rotated" : ""}`}
              >
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {activeIndex === index && (
              <div className="project-summary">
                <p>
                  <strong>Objective:</strong><br />{project.objective}
                </p>
                <p>
                  <strong>Tools & Technologies Used:</strong><br />{project.tools}
                </p>
                <p>
                  <strong>Results / Outcome:</strong><br />{project.results}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-link"
                >
                  🔗 GitHub Repository
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectSection;
