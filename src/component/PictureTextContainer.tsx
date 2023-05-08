import React, { useEffect, useState } from 'react';
import style from '../styles/piTe.module.scss';

interface Props {
  src?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainer: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={style['contribution-container']}>
      <div className={style[`fade-in-out`]}>
        <img className={style['projektbilder']} src={props.src} />
      </div>
      <p className={style['projektTextLinks']}>{props.text}</p>
    </div>
  );
};
export default PictureTextContainer;
