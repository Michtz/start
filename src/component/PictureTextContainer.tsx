import React, { useEffect, useState } from 'react';
import style from '../styles/piTe.module.scss';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainer: React.FC<Props> = (props: Props): JSX.Element => {
  const [image, setImage] = useState(true);
 

  useEffect(() => {
    setTimeout(() => {
      setImage(!image);
    }, 4000);
  });

  return (
    <div id='wrapper' className={style['contribution-container']}>
      <div className={style[`fade-in-out ${image ? 'show' : 'hide'}`]}>
        <img className={style['projektbilder']} src={image ? props.src : props.src2} />
      </div>
      <p className={style['projektTextLinks']}>{props.text}</p>
    </div>
  );
};
export default PictureTextContainer;

