import { useContext } from 'react';
import style from '../styles/header.module.scss';
import DreieckComponent from './DreieckComponent';
import { Menu } from './Menu';
import { Link, Router } from 'react-router-dom';
import { NavContent } from '../component/CreateContext';

const ArrowDown = () => {
  const context = useContext(NavContent);
  return (
    <div className={style['arrow']}>
      <a href={context[2].path}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
          <path
            fill="white"
            strokeLinejoin="round"
            d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
          />
        </svg>
      </a>
    </div>
  );
};

const HomeHeaderContainer = (content: any) => {
  return (
    <div>
      <div className={style['home-header-container']}>
        <Menu />
        <Link to={'/'}>
          <img src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        </Link>
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
