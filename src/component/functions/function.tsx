import { useEffect } from 'react';
import style from '../../styles/modal.module.scss';


export const PictureModal = ({ image }) => {
  return (
    <div className={style['modal-container']}>
      <img src={image} />
    </div>
  );
};

export function scrollUp(scrollingElement) {
  scrollingElement.style.scrollBehavior = 'auto';
  window.scrollBy(0, -1500);
  document.body.style.overflow = 'hidden';
}

export function scrollDown(scrollingElement) {
  scrollingElement.style.scrollBehavior = 'auto';
  window.scrollBy(0, +1500);

  document.body.style.overflow = 'visible';
}

export function scrollControl(modal, document) {
    useEffect(() => {
        const scrollingElement = document.documentElement;
        if (modal) {
          scrollUp(scrollingElement);
        } else {
          scrollDown(scrollingElement);
        }
      }, [modal]);
}

export function imgChanger(modal, setImage, image) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!modal) {
        setImage(!image);
      }
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [image, modal]);
}

export function handleKeyDown(setModal) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        setModal(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}






