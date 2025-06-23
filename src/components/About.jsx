import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-overlay">
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-text full-width"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I’m <strong>Tanmay Singh</strong>, a Computer Science undergraduate passionate
            about <strong>frontend development</strong>, <strong>AI</strong>, and crafting
            user-friendly solutions.
          </p>
          <p>
            I enjoy working with <strong>React</strong>, <strong>Python</strong>, and{" "}
            <strong>SQL</strong> to build fast, responsive web applications.
          </p>
          <p>
            Outside tech, I’m a dedicated <strong>footballer</strong> and active participant in{" "}
            <strong>technical and cultural societies</strong>.
          </p>
          <p>
            I value curiosity, collaboration, and turning ideas into impact — whether it’s in code
            or on the field.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
