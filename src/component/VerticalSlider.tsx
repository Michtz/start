import React from 'react';
import { Link } from 'react-router-dom';
import { transform } from 'typescript';
import style from '../styles/verticalSlider.module.scss';

const VerticalSlider = (props: any) => {
  console.log(props.content, 'props');
  const content = props.content;
  // const animate = () => {

  // }

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
