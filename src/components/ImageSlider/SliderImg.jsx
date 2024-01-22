import React, { useEffect, useState } from 'react';
import './SliderStyle.css';

export const SliderImg = ({ imgSlider, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgSlider.length);
    }, interval);

    return () => clearInterval(timer);
  }, [imgSlider.length, interval]);

  const handleClickPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imgSlider.length) % imgSlider.length);
  };

  const handleClickNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imgSlider.length);
  };
  return (
    <div className="sliderContainer">
    <div className="carousel">
      {imgSlider.slice(0, itemsPerPage).map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === 3 ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
    <div className="buttons-container">
      <button className="prev-button" onClick={handleClickPrev}>
        Previous
      </button>
      <button className="next-button" onClick={handleClickNext}>
        Next
      </button>
    </div>
  </div>
  );
};