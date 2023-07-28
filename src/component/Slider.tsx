import { useState, useEffect, useContext } from 'react';
import style from '../styles/slider.module.scss';
import { ClientsAndCustomers } from './CreateContext';

const SliderContainer = () => {
  const content = useContext<any>(ClientsAndCustomers);
  const [currentContent, setCurrentContent] = useState(content);
  const [isFadingOut, setIsFadingOut] = useState(false);

  function moveLastItemToFront() {
    setCurrentContent((prevContent: any) => {
      const newContent = [...prevContent];
      const lastItem = newContent.pop();
      newContent.unshift(lastItem);
      return newContent;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        moveLastItemToFront();
        setIsFadingOut(false);
      }, 100);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${style['slider']} ${isFadingOut ? 'fade-out' : ''}`}>
      {currentContent.map((image: any, index: number) => (
        <div key={index}>
          <img src={image.src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
