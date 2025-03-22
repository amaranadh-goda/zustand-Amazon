import { useState, useEffect } from 'react';
import HeroImg1 from '../../../assets/homeImg/heroCaroselImg/heroimg1.jpg';
import HeroImg2 from '../../../assets/homeImg/heroCaroselImg/heroimg2.jpg';
import HeroImg3 from '../../../assets/homeImg/heroCaroselImg/heroimg3.jpg';
import HeroImg4 from '../../../assets/homeImg/heroCaroselImg/heroimg4.jpg';
import HeroImg5 from '../../../assets/homeImg/heroCaroselImg/heroimg5.jpg';
import HeroImg6 from '../../../assets/homeImg/heroCaroselImg/heroimg6.jpg';
import HeroImg7 from '../../../assets/homeImg/heroCaroselImg/heroimg7.jpg';
//styles
import './herostyle/hero.css'
const Hero = () => {
  const images = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6, HeroImg7];
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        // Remove data-bs-ride="carousel" to disable Bootstrap's autoplay
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
            >
              <img src={image} className="carousel-item-img d-block w-100   " alt={`Hero ${index + 1}`} />
            </div>
          ))}
        </div>
<div style={{position:"relative",top:"-450px"}}>
        <button
          className="carousel-control-prev "
          type="button"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
