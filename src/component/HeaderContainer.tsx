import React, { useContext } from 'react';
import style from '../styles/header.module.scss';
import { Headers } from './CreateContext';
import DreieckComponent from './DreieckComponent';


const HeaderContainer = () => {

  const clickLogo = () => {
    console.log('go home');
  };
  
  const titelText = useContext(Headers);
  
  return (
    <div>
      <div className={style['header-container']}>
        <img onClick={clickLogo} src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        <div className={style['header-text']}>{titelText[0].header}</div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HeaderContainer;
