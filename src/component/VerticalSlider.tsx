import React from 'react';
import style from '../styles/verticalSlider.module.scss';

const VerticalSlider = (props: any) => {
  const content = props.content;
  const a = 0;
  return (
    <div className={style['vertical-slider']}>
      <div>
        <h2>{content[a].header}</h2>
      </div>
      <img src={content[a].src} />
    </div>
  );
};
export default VerticalSlider;
