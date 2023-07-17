import React from 'react';
import style from '../styles/header.module.scss';
import DreieckComponent from './DreieckComponent';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu } from './Menu';
import Arrow from './assets/arrowDown.svg';

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
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
          <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
        </svg>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HomeHeaderContainer;
