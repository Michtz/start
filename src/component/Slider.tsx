import React, { useState, useEffect, useContext } from 'react';
import style from '../styles/slider.module.scss';
import { ClientsAndCustomers } from './CreateContext';

const SliderContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const content = useContext(ClientsAndCustomers);
  console.log(content);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setActiveIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [content]);

  return (
    <div className={style['slider']}>
      {content.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
