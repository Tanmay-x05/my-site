import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero" id="intro">
      <motion.div
        className="image-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}images/me.jpeg`}
          alt="Tanmay Singh"
          className="hero-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div
          className="overlay-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1>
            Hi! <br />
            I'm <strong>Tanmay</strong>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="/gallery" className="btn-know-more">
              Know More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
