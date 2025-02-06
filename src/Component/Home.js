import React,{useState} from "react";

function Home(){
    const images = [
    
        "https://picsum.photos/300/300?text=Slide+1",
        "https://picsum.photos/300/300?text=Slide+2",
        "https://picsum.photos/300/300?text=Slide+3",
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      };
    
      return (
        <div className="carousel-container">
          <button onClick={prevSlide} className="prev-btn">Prev</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <button onClick={nextSlide} className="next-btn">Next</button>
        </div>
      );
    };
    

export default Home;