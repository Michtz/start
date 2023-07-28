import React from 'react';
import style from '../styles/header.module.scss';
import DreieckComponent from './DreieckComponent';
import { Menu } from './Menu';

const ArrowDown = () => {
  return (
    <div className={style['arrow']}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
        <path
          fill="white"
          strokeLinejoin="round"
          d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
        />
      </svg>
    </div>
  );
};

const HomeHeaderContainer = (content: any) => {
  const clickLogo = () => {
    console.log('go home');
  };

  return (
    <div>
      <div className={style['home-header-container']}>
        <Menu />
        <img onClick={clickLogo} src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        <div className={style['header-text']}>
          INTERIOR <br />
          DESIGN
          <br /> WITH
          <br /> IDENTITY
        </div>
        <ArrowDown />
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HomeHeaderContainer;
