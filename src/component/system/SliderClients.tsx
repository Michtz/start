import { useState, useEffect } from 'react';
import style from '../../styles/slider.module.scss';
import { moveLastItemToFront } from '../functions/function';
interface SliderProps {
  src: string[];
}

const SliderContainer: React.FC<SliderProps> = ({ src }) => {
  const [currentContent, setCurrentContent] = useState(src);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        moveLastItemToFront(setCurrentContent);
        setIsFadingOut(false);
      }, 100);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${style['slider']} ${isFadingOut ? 'fade-out' : ''}`}>
      {currentContent.map((obj: string) => (
        <div key={obj}>
          <img src={obj} alt={`Slide ${obj + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
