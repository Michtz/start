import React, { useEffect, useState } from 'react';
import style from '../styles/piTe.module.scss';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainerSlider: React.FC<Props> = (props: Props): JSX.Element => {
  const [image, setImage] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setImage(!image);
    }, 4000);
  });

  return (
    <div className={style['contribution-container']}>
      {props.right &&(<div className={style[`fade-in-out ${image ? 'show' : 'hide'}`]}>
        <img className={style['projektbilder']} src={image ? props.src : props.src2} />
      </div>)}
      <p className={style['projektTextLinks']}>{props.text}</p>
      {!props.right &&(<div className={style[`fade-in-out ${image ? 'show' : 'hide'}`]}>
        <img className={style['projektbilder']} src={image ? props.src : props.src2} />
      </div>)}
    </div>
  );
};
export default PictureTextContainerSlider;

