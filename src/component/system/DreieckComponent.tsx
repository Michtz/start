import React from 'react';
import style from '../../styles/dreieck.module.scss';

const DreieckComponent = () => {
  return (
    <div className={style['dreieckeKomplett']}>
      <div className={style['dreieckenOben']}>
        <div className={style['dreieckLinksOben']}></div>
        <div className={style['dreieckRechtsOben']}></div>
      </div>
      <div className={style['dreieckUnten']}>
        <div className={style['dreieckLinksUnten']}></div>
        <div className={style['dreieckRechtsUnten']}></div>
      </div>
    </div>
  );
};
export default DreieckComponent;
