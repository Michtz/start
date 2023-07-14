import React from 'react';
import style from '../styles/header.module.scss';
import DreieckComponent from './DreieckComponent';
import { MenuContentMain } from './Menu';

const HeaderContainer = (content: any) => {
  const clickLogo = () => {
    console.log('go home');
  };

  return (
    <div>
      <div className={style['header-container']}>
        <img onClick={clickLogo} src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        <div className={style['header-text']}>{content.content}</div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HeaderContainer;
