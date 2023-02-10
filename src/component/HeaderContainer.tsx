import React from 'react';
import style from '../styles/header.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DreieckComponent from './DreieckComponent';
const HeaderContainer = () => {
  const clickLogo = () => {
    console.log('go home');
  };
  const titelText = 'titel';
  return (
    <div>
      <div className={style['header-container']}>
        <img onClick={clickLogo} src="https://meinhof.ch/src/logo/meinhofLogoWeissID.png" />
        <div>{titelText}</div>
        <a href="https://meinhof.ch/bueroHorw.html">
          <KeyboardArrowDownIcon />
        </a>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HeaderContainer;
