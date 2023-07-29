import React, { useEffect, useState } from 'react';
import style from '../styles/piTe.module.scss';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainerSlider: React.FC<Props> = ({ src, src2, text, right }): JSX.Element => {
  const [image, setImage] = useState(true);
  console.log(text);

  const firstLetter: string = text.charAt(0);

  useEffect(() => {
    setTimeout(() => {
      setImage(!image);
    }, 4000);
  });

  return (
    <div className={style['contribution-container']}>
      {right && (
        <div className={style[`fade-in-out ${image ? 'show' : 'hide'}`]}>
          <img className={style['projektbilder']} src={image ? src : src2} />
        </div>
      )}
      <p className={style['projektTextLinks']}>{text}</p>
      {!right && (
        <div className={style[`fade-in-out ${image ? 'show' : 'hide'}`]}>
          <img className={style['projektbilder']} src={image ? src : src2} />
        </div>
      )}
    </div>
  );
};
export default PictureTextContainerSlider;
