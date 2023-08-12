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

export function imgChanger(modal, setImage, image, setIsFading) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!modal) {
        setIsFading(true);
        setImage(!image);
        setTimeout(() => {
          setIsFading(false);
        }, 500);
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

// scrolbar remover

export function ScrolbarRemover() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const onScroll = () => {
      document.body.classList.remove('hide-scrollbar');
      document.body.classList.add('show-scrollbar');

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('show-scrollbar');
        document.body.classList.add('hide-scrollbar');
      }, 2000);
    };

    document.addEventListener('scroll', onScroll);

    // Clean up function
    return () => {
      document.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}


export const HandleScrollbarMovmend = (headerRef) =>
  useEffect(() => {
    let scrollTimeout;
    const onScroll = () => {
      headerRef.current.classList.add('remove-padding');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        headerRef.current.classList.remove('remove-padding');
      }, 2000);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);