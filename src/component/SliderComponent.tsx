import React, { useState } from 'react';
import style from '../styles/slider.module.scss';

interface SliderTyps {
  name: string;
  src: string;
  path: string;
}


const ImageSlider = ( slides:SliderTyps ) => {
  const [current, setCurrent] = useState(0);
  const length = slides;


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-container">
      {slides.map((slide, index) => {
        return (
          <div className={style['slide-item']} key={index}>
            {index === current && <img src={slide.image} alt="travel image" className="image" />}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
