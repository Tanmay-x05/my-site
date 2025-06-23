import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img
        src="images/profile.jpg"
        alt="Tanmay Singh"
        className="sidebar-img"
      />
      <h2>Tanmay Singh</h2>
      <p className="contact-info">📧 tanmay.s1910@gmail.com</p>
      <p className="contact-info">📞 +91 85709 16965</p>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>

        {/* Resume opens PDF in a new tab */}
        <a
          href="resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Resume
        </a>
      </nav>

      <div className="socials">
        <a
          href="https://linkedin.com/in/tanmay-singh-cse"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Tanmay-x05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com/_.tanmay_singh.__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      <footer>
        <p>Made with ❤️</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
