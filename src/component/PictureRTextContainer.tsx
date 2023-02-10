import React from 'react';
import style from '../styles/piTe.module.scss';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
}

const PictureRTextContainer: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className={style['contribution-container']}>
      <p className={style['projektTextLinks']}>{props.text}</p>
      <div className={style['projektBilderBox rechts']}>
        <img className={style['projektbilder']} src={props.src} />
      </div>
    </div>
  );
};
export default PictureRTextContainer;
