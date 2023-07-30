import { useState, useEffect } from 'react';
import style from '../../styles/slider.module.scss';

function moveLastItemToFront(setCurrentContent) {
  setCurrentContent((prevContent: any) => {
    const newContent = [...prevContent];
    const lastItem = newContent.pop();
    newContent.unshift(lastItem);
    return newContent;
  });
}

interface SliderProps {
  src: string[];
}

const SliderContainer:React.FC<SliderProps> = ({ src }) => {
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
