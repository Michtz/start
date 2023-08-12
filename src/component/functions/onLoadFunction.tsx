import React, { useEffect, useState } from 'react';
import { Logo } from '../system/Logo';
import style from '../../styles/onLoad.module.scss';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

const LoadingOverlay: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsFading(true);
      }, 1000);

      setTimeout(() => {
        setIsLoaded(true);
        remove();
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const remove = () => {
    setTimeout(() => {
      return null;
    }, 10);
  };

  if (isLoaded) return null;

  return (
    <div className={`${style.overlay} ${isFading ? style['fade-out'] : ''}`}>
      <div className={`${style.logo} ${isFading ? style['slide-up'] : ''}`}>
        <Logo link={false} />
        <div className={`${style.loader} ${isFading ? style['loader-fade-out'] : ''}`}>
          {!isFading && <CircularProgress color="inherit" />}
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
