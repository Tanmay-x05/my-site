import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="intro">
      <div className="image-container">
        <img
          src={`${import.meta.env.BASE_URL}images/me.jpeg`}
          alt="Tanmay Singh"
          className="hero-image"
        />
        <div className="overlay-text">
          <h1>
            Hi! <br />
            I'm <strong>Tanmay</strong>
          </h1>
          <Link to="/gallery" className="btn-know-more">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
