import React, { useState } from 'react';
import style from '../styles/piTe.module.scss';
import { PictureModal, handleKeyDown, scrollControl } from './functions/function';

interface Props {
  src: string | undefined;
  text: string;
}

const PictureTextContainer: React.FC<Props> = ({ src, text }): JSX.Element => {
  const [modal, setModal] = useState(false);
  handleKeyDown(setModal);
  scrollControl(modal, document);

  return (
    <div className={style['contribution-container']}>
      <img className={style['projekt-pictures']} onClick={() => setModal(true)} src={src} />
      <p className={style['projektText']}>{text}</p>
      {modal && (
        <div onClick={() => setModal(false)}>
          <PictureModal image={src} />
        </div>
      )}
    </div>
  );
};
export default PictureTextContainer;
