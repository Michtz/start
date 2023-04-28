import React from 'react';
import style from '../styles/header.module.scss';
import DreieckComponent from './DreieckComponent';


const HomeHeaderContainer = (content:any) => {

  const clickLogo = () => {
    console.log('go home');
  };

  return (
    <div>
      <div className={style['home-header-container']}>
        <img onClick={clickLogo} src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        <div className={style['header-text']}>INTERIOR <br/>DESIGN<br/> WITH<br/> IDENTITY</div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HomeHeaderContainer;
