// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


  const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      'Slide 1',
      'Slide 2',
      'Slide 3',
      'Slide 4'
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };


    
      return (
        <div className="slider-container">
          <button onClick={prevSlide}>Previous</button>
          <div className="slide">{slides[currentSlide]}</div>
          <button onClick={nextSlide}>Next</button>
        </div>
      );
    };
  


export default App;
