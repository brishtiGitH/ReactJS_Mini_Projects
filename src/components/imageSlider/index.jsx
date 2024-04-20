import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(images);
  useEffect(() => {
    if (url !== null) fetchImages(url);
  }, [url]);

  if (error) {
    return <div>Error Occured: {error}</div>;
  }
  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {images && images.length
        ? images.map((image, index) => {
            return (
              <img
                key={image.id}
                src={image.download_url}
                width={200}
                alt={image.download_url}
                className={
                  index === currentSlide ? "current-image" : "displayNone"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="indicator">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  onClick={() => setCurrentSlide(index)}
                  key={index}
                  className={
                    index === currentSlide
                      ? "active-current-indicator"
                      : "current-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
