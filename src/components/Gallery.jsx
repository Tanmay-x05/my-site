const Gallery = () => {
  const images = [
    `${import.meta.env.BASE_URL}images/photo-1.jpg`,
    `${import.meta.env.BASE_URL}images/photo-2.jpg`,
    `${import.meta.env.BASE_URL}images/photo-3.jpg`,
    `${import.meta.env.BASE_URL}images/photo-4.jpeg`,
  ];

  return (
    <div className="gallery-container">
      <h2 className="text-3xl font-semibold mb-6 text-center">Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tanmay ${index + 1}`}
            className="gallery-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
