const Gallery = () => {
  const images = [
    "images/photo-1.jpg",
    "images/photo-2.jpg",
    "images/photo-3.jpg",
    "images/photo-4.jpeg",
    // Add more images here if needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tanmay ${index + 1}`}
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
